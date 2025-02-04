const { error } = require('node:console');
const fs=require('fs/promises');
const http=require('node:http');

const sampleFilePath='./hi.txt';
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/pdf' });
//     fs.readFile('/home/adarshprabhu/Downloads/Aspire - Revised Approved Softwares List.pdf', (err, data) => {
//         if (err) {
//             res.statusCode = 500;
//             res.end('Error reading file');
//         } else {
//             res.statusCode = 200;
//             res.end(data);
//         }
// })
// })


// server.listen(3000, (req) => {
//     console.log(req)
//     console.log('Server running at http://localhost:3000/');
// });

//  fs.stat(sampleFilePath,(err,stats)=>{
//     if(err)
//         console.error('error und');

//     console.log(stats.isFile())
//     console.log(stats.isDirectory())
//     console.log(stats.isSymbolicLink())

// })
async function fileHandle() {
    

try{
const fileRead= await fs.open(sampleFilePath, 'r');
console.log(fileRead.fd);
}
catch(error){
    console.log('error',error);
}
}
fileHandle();



