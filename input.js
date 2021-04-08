let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  
  
  return stdin;
};

const handleUserInput = function(input) {
  if (input === '\u0003') {
    console.log('exit');
    process.exit();
  }
  if (input === '\u0077') {
    connection.write('Move: up');
  }
  if (input === '\u0073') {
    connection.write('Move: down');
  }
  if (input === '\u0061') {
    connection.write('Move: left');
  }
  if (input === '\u0064') {
    connection.write('Move: right');
  }
  if (input === '\u0069') {
    connection.write('Say: beat it!');
  }
  if (input === '\u006A') {
    connection.write('Say: MY APPLE!');
  }
  if (input === '\u006B') {
    connection.write('Say: so long!');
  }
  if (input === '\u006C') {
    connection.write('Say: eat my dust!');
  }
};

module.exports = setupInput;