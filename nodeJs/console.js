console.log("hello world")
console.log('console will clear in 3 sec')
const time=()=>{console.log('times up')}
console.time('time()')

try{
console.time(setTimeout(()=>console.clear(),3000));

}
catch{
    console.error(error,"error occured");
}


function sum(a,b)
{
    return a+b
}

module.exports = sum;



