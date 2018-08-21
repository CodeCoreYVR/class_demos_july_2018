const path = require("path");
const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

// Require the "express" package returns functions that can
// to create an instance of an Express app. We build
// an Express by calling a series of methods to configure
// it before we run it.
// This technique is called the "builder" pattern.
const app = express();
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

// The following method creates a "route" with a callback that
// used to build the response that'll be sent back to the client.
// In the code below, HTTP requests made to the path "/hello_world"
// are handled by this callback which sends back the text
// "Hello, World!"

// The first argument to the method "get" is the URL path and the
// second is a callback.
app.get("/hello_world", (request, response) => {
  // The "request" argument is an object that represents the request
  // being made by the client. It contains information about the client
  // and everything the client is asking for.

  // The "response" argument is an object that represents the server's
  // reply to the client. We build out the content to send back to
  // the client with it.
  response.send("Hello, Peoples!");
});

app.get("/", (request, response) => {
  // `response.render(<ejs-filepath>)` is used
  // to render a template from the "views/" directory at
  // the relative file path of <ejs-filepath>. When writing
  // the file path, you can ignore the extension.

  // In the call below, the file at "./views/welcome.ejs" is
  // rendered into HTML and is sent as the content of the response
  // to the client.
  response.render("welcome");
});

app.get("/survey", (request, response) => {
  console.log("---------------------------");
  console.log("Request's Query String Data");
  console.log("---------------------------");
  console.log(request.query);

  // "request.query" is a property that holds an object
  // which contains of all the key-value pairs from
  // a URL's query string.
  // For example:
  // .../survey?fullName=Steve&color=%2300fdff
  // request.query === { fullName: "Steve", color: "#00fdff"} // true

  response.render("survey");
});

app.get("/survey/results", (request, response) => {
  // response.send(request.query);
  const fullName = request.query.fullName;
  const color = request.query.color;
  const timeOfDay = request.query.timeOfDay;

  // (Optional) `response.render` can take an object as
  // a second argument where all its key-value pairs will
  // turned into variables inside of the template that is rendered.
  // This is how we share data with template files.
  response.render("surveyResults", {
    fullName: fullName,
    color: color,
    timeOfDay: timeOfDay
  });
});

// URL http://localhost:4545/survey?fullName=Steve&color=%2300fdff
//   scheme | host     |port| path | query string (search string)

// A "query" is a way to store data in the data in the URL.
// It use the URL Encoding format.

// Following a url's path and seperated by a "?" will be a
// a query string which holds key-value pairs of data.
// The format appears as follows:
// ?[key_1]=[value_1]&[key_2]=[value_2]&[key_3]=[value_3]

// When a form is submitted, its data will by default be included
// into the URL with the above format.

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;
app.post("/sign_in", (request, response) => {
  const username = request.body.username;

  // `response.cookie(<cookie-name>, <cookie-value>, <options)`
  // The above method is added to the `response` object by
  // the `cookie-parser` middleware. Use to send cookies to
  // the browser.
  // - The first argument is a string that's the name of the cookie
  // - The second, a value for the cookie
  // - (optional) The last, options for the cookie

  response.cookie("username", username, { maxAge: COOKIE_MAX_AGE });

  // Like `response.send` and `response.render`, `response.redirect`
  // ends the response with a redirect status code and a location (i.e. URL) where
  // the browser should make a GET request to (should browse to).
  response.redirect("/");
});

app.post("/sign_out", (request, response /*, next */) => {
  response.clearCookie("username");
  response.redirect("/");
});

// ------------------
// R U N  S E R V E R
// ------------------

const PORT = 4545;
const HOST = "localhost"; // 127.0.0.1
app.listen(PORT, HOST, () => {
  console.log(`💻 Server listening on http://${HOST}:${PORT}`);
});
