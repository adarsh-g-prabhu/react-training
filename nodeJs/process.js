const process = require('node:process');
// const fs = require('node:fs');

// process.on('beforeExit', (code) => {
//   console.log('Process beforeExit event with code: ', code);
// });

// process.on('exit', (code) => {
//   console.log('Process exit event with code: ', code);
// });

// console.log('This message is displayed first.');




// process.on('uncaughtException', (err, origin) => {
//   console.log(
//     process.stderr.fd,
//     `Caught exception: ${err}\n` +
//     `Exception origin: ${origin}\n`,
//   );
// });

// setTimeout(() => {
//   console.log('This will still run.');
// }, 500);


// newFunc();
// console.log('This will not run.');


const util = require('node:util')

console.log(util.format('%s:%s', 'foo', 'bar', 'baz'));


const obj1 = { name: 'Alice', age: 25 };
console.log(util.inspect(obj1, { showHidden: true, depth: 5 ,breakLength: 10}));