// d011
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
  let line = lines[0]
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = str.indexOf(line)
  console.log(result+1)
});