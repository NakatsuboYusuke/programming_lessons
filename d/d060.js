// d060
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
  const [aBtn, bBtn] = lines[0].split(/\s/).map(Number);
  console.log(aBtn - bBtn);
});