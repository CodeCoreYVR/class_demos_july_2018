const path = require("path");
const http = require("http");
const express = require("express");
const socketIo = require("socket.io");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

// Require the "express" package returns functions that can
// to create an instance of an Express app. We build
// an Express by calling a series of methods to configure
// it before we run it.
// This technique is called the "builder" pattern.
const app = express();
const server = http.Server(app);
const io = socketIo(server);

app.set("view engine", "ejs");

// -------------------
// M I D D L E W A R E
// -------------------

// LOGGING
// Calling "logger" returns a middleware function that
// is passed as an argument to "app.use()". Everytime
// a request will be made to our server this middleware function
// will be called and it will log information about that request
// to the console.

app.use(logger("dev"));

// STATIC ASSETS
// Use path.join to combine strings into directory paths.
// Example:
// path.join("/", "Users", "bob") -> "/Users/bob"

// `__dirname` is a global variable inside Node.js scripts
// that returns the full directory path beginning from root (i.e. /)
// to the file that holds `__dirname`.
// console.log("__dirname in ./app.js:", __dirname);

// The static assets middleware will take all files and
// directories from a specified path and serve it all
// publically on the web.
app.use(express.static(path.join(__dirname, "public")));

// URLENCODED

// This middleware will decode data from forms that
// use the POST method.
// When the "extended" option is set to `true`, arrays and objects
// will be support in the url encoding.
app.use(express.urlencoded({ extended: true }));
// The data from the form will be available on the
// `request.body` property instead of the `request.query`.

// METHOD OVERRIDE

app.use(
  methodOverride((req, res) => {
    if (typeof req.body === "object" && req.body._method) {
      const method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

// COOKIE PARSER
app.use(cookieParser());

// CUSTOM MIDDLEWARE

// `app.use` is similar to `app.get`, but it works for
// all HTTP methods (e.g. GET, POST, DELETE, PUT, PATCH, etc)
// all URL paths.
app.use((request, response, next) => {
  console.log("🍪 Cookies:", request.cookies);
  // Read cookies from the request with `request.cookies`
  // Cookies are represented as object where each key
  // is a cookie name and its value is the cookie's value.
  // You must install & setup "cookie-parser" to
  // read cookies.
  const username = request.cookies.username;

  // Set properties on `response.locals` object to
  // create variables that are global to all of your
  // EJS templates. In code below, we set a property
  // "username" that becomes a variable "username"
  // in all our templates.
  response.locals.username = "";

  if (username) {
    response.locals.username = username;
    console.log(`🤓 Signed in as ${username}`);
  }

  // The third argument, "next", is a function that
  // when called tells Express that this middleware has completed
  // its job and its time to move to the next middleware in line.
  next();
});

// URL (Uniform Resource Locator)
// URL http://localhost:4545/hello_world
//  scheme  | host     |port| path

// The "scheme" identifies the protocol being used
// to communicate. Typically, HTTP or HTTPS, but could be SSH, FTP, TCP, etc.

// The "host" identifies the domain or IP that is hosting the server.

// The "path" identifies the location of a resource on the server
// the request is being made to. It's similar to a file path.

// -----------
// R O U T E S
// -----------

const welcomeRouter = require("./routes/welcome");
const postsRouter = require("./routes/posts");

app.use("/", welcomeRouter);
// You can split routes into their modules with
// express.Router() instance. When doing so, require the module
// and connect to the app with app.use(<path-prefix>, <router-instance>).
// The app.use(...) will route all routes inside of postsRouter
// prefix all of their URLs with /posts.
app.use("/posts", postsRouter);

// -------------
// S O C K E T S
// -------------

const knex = require("./db/client");

io.on("connection", socket => {
  socket.on("create comment", async params => {
    const { postId, content } = params;
    console.log("IO create comment", params);

    try {
      const [comment] = await knex
        .insert({ postId, content })
        .into("comments")
        .returning("*");

      socket.emit("new comment", comment);
      socket.to(`posts_${postId}`).emit("new comment", comment);
    } catch (error) {
      console.error(error);
    }
  });

  socket.on("join comment room", postId => {
    const room = `posts_${postId}`;

    socket.join(room, () => {
      const msg = "IO User joined " + room;
      console.log(msg);

      // Doesn't send to itself
      socket.to(room).send(msg);
      socket.send(msg);
    });
  });
});

// ------------------
// R U N  S E R V E R
// ------------------

const PORT = 4545;
const HOST = "localhost"; // 127.0.0.1
server.listen(PORT, HOST, () => {
  console.log(`💻 Server listening on http://${HOST}:${PORT}`);
});
