const express = require("express");
// Require the "express" package returns functions that can
// to create an instance of an Express app. We build
// an Express by calling a series of methods to configure
// it before we run it.
// This technique is called the "builder" pattern.
const app = express();

// URL (Uniform Resource Locator)
// URL http://localhost:4545/hello_world
//  scheme  | host     |port| path

// The "scheme" identifies the protocol being used
// to communicate. Typically, HTTP or HTTPS, but could be SSH, FTP, TCP, etc.

// The "host" identifies the domain or IP that is hosting the server.

// The "path" identifies the location of a resource on the server
// the request is being made to. It's similar to a file path.

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

const PORT = 4545;
const HOST = "localhost"; // 127.0.0.1
app.listen(PORT, HOST, () => {
  console.log(`💻 Server listening on http://${HOST}:${PORT}`);
});
