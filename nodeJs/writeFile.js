const fs= require('node:fs');
const filepath='./hi.txt'
let fileData=fs.readFileSync(filepath,{encoding:'utf-8'})
console.log('before \n',fileData);
content= 'alan was a bully at a school, he beats poor students.';
fs.writeFileSync(filepath,content,{flag:'a+'})

fileData=fs.readFileSync(filepath,{encoding:'utf-8'});
console.log('after \n',fileData);

fileData=fs.appendFileSync(filepath,'\n hello world')