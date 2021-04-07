const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.on('data', (message) =>{
    console.log('youre dead, idled');
  });
  conn.setEncoding('utf8');

  return conn;
};

module.exports = connect;