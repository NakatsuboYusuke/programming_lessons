// d185
process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const INPUTS = lines,
        PAY    = Number(INPUTS[0]),
        HOUR   = Number(INPUTS[1]);
  console.log(PAY * HOUR);
});