const express=require('express');
const app=express();
const port =3000;
const debug=require('debug')('app:server')


app.use(express.static('public'));
app.get('/', (req,res)=>
{res.end('hello world')})


const server=app.listen(port,()=>{
    console.log(`app listening at http://localhost:${port}`)
})

process.on('SIGTERM', () => {
  debug('SIGTERM signal received: closing HTTP server')
  console.log('sigterm')
  server.close(() => {
    debug('HTTP server closed')
    console.log('closed')
  })
})

setTimeout(() => {
    console.log('killing current process');
    process.kill(process.pid, 'SIGTERM'); 
  }, 5000);
