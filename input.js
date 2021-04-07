let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on(handleUserInput, (key)=> {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === '\u0077') {
      console.log('up');
    }
    if (key === '\u0073') {
      console.log('down');
    }
    if (key === '\u0061') {
      console.log('left');
    }
    if (key === '\u0064') {
      console.log('right');
    }
  });
  return stdin;
};

const handleUserInput = function() {

};

module.exports = setupInput;