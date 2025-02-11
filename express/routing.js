const express=require('express');
const app=express();
const port =3000;

app.use(express.static('public'));
app.get('/user/:id',(req,res)=>
{
  const uid=req.params.id;
    res.end(`user id:${uid}`)
})

app.get('/user/',(req,res)=>
    {
    //   const uid=req.params.id;
        res.end(`user hello`)
    })
app.get('/',(req,res)=>{
    res.end('hey there');
})


app.listen(port,()=>{
    console.log(`app listening at http://localhost:${port}`)
})