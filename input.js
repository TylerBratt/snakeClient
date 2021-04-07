const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncode('utf-8');
  stdin.resume();
  stdin.on(handleUserInput, (key)=> {
    if (key === '\u0003') {
      process.exit();
    }
  });
  return stdin;
};

const handleUserInput = function() {

};

module.exports = setupInput;