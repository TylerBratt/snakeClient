const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.on('connect',(client)=>{
    console.log('Connection succesful');
    conn.write('Name: TB');
  });
  
  conn.on('connect',(client)=>{
    // conn.write('Move: up');
    // conn.write('Move: down');
    // conn.write('Move: left');
    // conn.write('Move: right');
  });
  
  conn.on('data', (message) =>{
    console.log('youre dead, idled');

  });
  conn.setEncoding('utf8');

  return conn;
};

module.exports = connect;