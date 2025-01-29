const fs = require('node:fs');
fs.readFile('hi.txt', 'utf8',(err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log('me first'); 
