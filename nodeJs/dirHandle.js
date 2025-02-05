const fs = require('node:fs');
const folderName = 'new';
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
  else{
    console.log(folderName,'already exists');
  }
} catch (err) {
  console.error(err);
}

try {
    if (fs.existsSync('new1')) {
fs.rmdirSync('new1');
console.log('file rremoved')
    }
else
console.log('doesnt exist');
}
    catch(error)
    {
        console.error(error);
    }


   const folderPath='../assessment/src'
   
   fs.readdirSync(folderPath)
 .filter((value)=> value.endsWith('.css')).map(file=> console.log(file));
   
 
