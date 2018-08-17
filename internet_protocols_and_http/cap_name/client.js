const net = require('net');
const readline = require('readline');

const client = net.Socket();

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question('What is your name?', (name) => {
  client.connect('5001', '127.0.0.1', () => {
    client.write(name);
  });
});

client.on('data', (data) => {
  console.log(`${data}`);
});