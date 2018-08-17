const net = require('net');

const capitalize = function(string) {
  return string[0].toUpperCase() + string.slice(1);
}

const server = net.createServer ((socket) => {
  socket.on('data', (data) => { // data comes as a Buffer object
    socket.write(`Hello ${capitalize(data.toString())}`);
  });
});


server.listen(5001, '127.0.0.1');
console.log('server is listing on port 5001');
