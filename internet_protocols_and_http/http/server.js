const http = require('http');
const url  = require('url');

const server = http.createServer( (request, response) => {
  // if I have HTTP params that looks like
  // http://localhost:4000?name=john&age=10
  // then params will be:
  // { name: 'John', age: '10' }
  console.log(`Handling ${request.method} request with URL ${request.url}`);
  
  // console.log(`URL ${url.parse(request.url, false).pathname}`);
  const params = url.parse(request.url, true).query;
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(`<!DOCTYPE html>
                  <html>
                  <head>
                    <title>My first Node.js HTTP server</title>
                  </head>
                  <body>
                    <h1>Hello ${params.name}, Welcome to my page</h1>
                  </body>
                  </html>`);
  response.end();
});

server.listen(4000);
console.log('HTTP sever running on port 4000');