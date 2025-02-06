const fs=require('node:fs/promises')

async function doSomething() {
    const data = await fs.readFile('hi.txt',{flag:'a+'})
   console.log(data);
   console.log(data.toString('utf-8'));
}

// doSomething();


const {Buffer } = require('node:buffer');
const buf = Buffer.from('hello world');
console.log(buf, buf.toString('utf-8'));

console.log(Buffer.alloc(10,1));
const bf1= Buffer.allocUnsafe(10);
console.log(bf1);
console.log(bf1.fill(19))
bf2=Buffer.alloc(10);

console.log(bf2.fill(9));