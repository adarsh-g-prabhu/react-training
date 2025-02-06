const fs = require('node:fs');
const file = fs.createWriteStream('sample.txt');
file.write('hello, ');
file.end('world!');
const file2= fs.createReadStream('hi.txt');
const fileRead=fs.createReadStream('sample.txt');
// file2.pipe(file);
// console.log(file2);
console.log(file2.read(20));
fileRead.resume();
const read = fileRead.read(4);

console.log(read);



