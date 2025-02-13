const express=require('express');
const { path } = require('../express/app');
const app=express();
const fs=require('node:fs').promises;

app.get('/',(req,res)=>{
    res.send('<h1> welcome to the assessment</h1>');
})

const bookPath='./books.json'
app.get('/books/',async(req,res)=>{
    // res.setHeader('Content-Type','application/json')
    const books=  await fs.readFile(bookPath,'utf-8');
    res.status(200);
    res.send(books)
})

app.get('/books/:id',async(req,res)=>{
    
    
    const bookId= req.params.id;
    const books=await fs.readFile(bookPath,'utf-8');
    const objBooks= JSON.parse(books)
    if(objBooks.find(book=>book.id==bookId))
    {
        res.setHeader('Content-Type','application/json')
    const specificBook=objBooks.filter(book=> book.id==bookId)
    res.status(200);
    res.send(specificBook);
    }
    else
    {
        res.status(400).send('<h2>book not found</h2>')
    }
})

app.post('/books/',()=>{
    
})



app.delete('/books/:id',async(req,res)=>{
    const bookId=req.params.id;
    res.setHeader('Content-Type','application/json')
    const books=await fs.readFile(bookPath,'utf-8');
    const objBooks= JSON.parse(books)
    const newBook=objBooks.filter(book=> book.id!=bookId)
    fs.writeFile(bookPath,JSON.stringify(newBook))
    res.status(200);
    res.send(newBook);
})
const port=3001;
app.listen(port,()=>{
    console.log(`app kelkunu - http://localhost:${port}`);
})

