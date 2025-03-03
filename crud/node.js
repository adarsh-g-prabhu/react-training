const http=require('node:http');
const server= http.createServer((req,res)=>
{
    if(req.url=='/')
    // res.writeHead();
    res.end('hey alan')
    else if(req.url=='/user')
    {
        res.end(`user ${req.method}`);
        
    }
    else{
        res.end('not found')
    }
})

server.listen(3000,()=>
console.log('server is running in '))