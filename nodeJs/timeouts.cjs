
//  let count= 0;
// const interval = setInterval(() => {
   
//     if (count==5) {
//       clearInterval(interval);
//     }
//     console.log('interval is running')
//     count+=1;
//     console.log('count',count)
//   }, 1000);

//   function nums()
//   {
//     for(let i=0;i<10;i++)
//     {
//         console.log(i);
//     }
//   }
// nums()

// console.time('process time')
// const arr=[1,5,3,9,12,2,1000,7,8,3];
// let i=0;
// let newarr=[];
// arr.map((el)=>{

//     setTimeout(()=>console.log(el),el)
// })

// console.timeEnd('process time')


const fs = require('node:fs');
fs.readFile('./hi.txt', () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
  console.log('normal')
});

// const myFunction = () => {
//     console.log('hi')
  
//     setTimeout(myFunction, 1000);
//   };
  
//   setTimeout(myFunction, 1000);
  