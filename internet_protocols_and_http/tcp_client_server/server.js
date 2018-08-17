const net = require('net');

const server = net.createServer( (socket) => {
  socket.on('data', (data) => {
    console.log(`Data received from a client: ${data}`);
    socket.write('Thanks for sending data over');
  });
});

server.listen(5000, '127.0.0.1');
console.log('>>> Server is running on localhost with port 5000');