// const fs = require('fs');


// const t1=process.performanceNow()
// const readableStream = fs.createReadStream('index.js', { encoding: 'utf8' });

// readableStream.on('data', (chunk) => {
//     console.log('Received chunk:', chunk);
// });

// readableStream.on('end', () => {
//     console.log('Finished reading file');
// });

// const { error } = require('node:console');


// const fs=require('node:fs/promises');

// const reading=async()=>{
// const read= await fs.readFile('index.js','utf8',(err)=>{
//     console.error(error);
// });
// console.log('readed fil:',read)
// const buffered=Buffer.from(read)

// console.log('buffer out',buffered);
// console.log('buffered to',buffered.toString('utf8'))
// }


// reading();


// const fs=require('node:fs');
// const zlib=require('node:zlib')
// const filepath1='file1.txt'
// const filepath2='file2.txt'
// const filepath3='file3.txt'

// const gzip = zlib.createGzip();
// const readStream = fs.createReadStream(filepath2);
// const writeStream = fs.createWriteStream(filepath3);
// const gunzip= zlib.createGunzip();
// readStream.pipe(gunzip).pipe(writeStream);

// fs.stat(filepath2,(err,stats)=>{
//   console.log('fileSize2:',stats.size)  
// })
// fs.stat(filepath3,(err,stats)=>{
//     console.log('fileSize3:',stats.size)  
//   })


console.log(process.env.LANG);
console.log(process.pid);

const { performance } = require('perf_hooks');

const start = performance.now(); // Start time

// Simulated task
for (let i = 0; i < 10000000000; i++) {} 

const end = performance.now(); // End time
console.log(`Execution time: ${(end - start).toFixed(3)}ms`);
