const express=require('express');
const { path } = require('../express/app');
const app=express();
const fs=require('node:fs').promises;

app.use(logger)
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
        res.status(404).send('<h2>book not found</h2>')
    }
})

app.use(express.json());
app.post('/books/',async(req,res)=>{
    try{
        console.log('hi');
    const data = req.body;
    // console.log(req.body);
    const jsonData=await fs.readFile(bookPath,'utf-8');
    const parsedJsonData= JSON.parse(jsonData);
    let max=parsedJsonData[0].id;
 
    parsedJsonData.forEach((data)=>{
        if(data.id>max)
        {
        max=data.id;
        }
       
    })
    console.log(max);
    data.id=max+1
    parsedJsonData.push(data);
    const newData= JSON.stringify(parsedJsonData)

    await fs.writeFile(bookPath,newData);
    console.log('data got successfully.');
    res.status(200).send('data posted');
    }
    catch(err)
    {
        console.log('error:',err);
    }

})

app.put('/books/:id',async(req,res)=>{
    const bookId=req.params.id;
   
    const updateData=req.body
    res.setHeader('Content-Type','application/json')
    try{
    const books=await fs.readFile(bookPath,'utf-8');
    const objBooks= JSON.parse(books)
    console.log(objBooks)
    if(objBooks.find(book=>book.id==bookId))
    {
    let updateBook=[];
    updateBook=objBooks.map(book=> {
        // console.log('mapped', book)
        if(book.id==bookId){
            console.log('bookie');
            return {...book,...updateData}
    }
        return book
})
    console.log(updateBook);
    const newData= JSON.stringify(updateBook)

    await fs.writeFile(bookPath,newData);
    res.status(200).send('update successs')
}
else{
    res.status(404).send('Book doesnt exist')
}
}
catch(err)
{
    console.log('error:',err)
}
})



  
app.delete('/books/:id',async(req,res)=>{
    const bookId=req.params.id;
    res.setHeader('Content-Type','application/json')
    const books=await fs.readFile(bookPath,'utf-8');
    const objBooks= JSON.parse(books)
    if(objBooks.find(book=>book.id==bookId))
    {
    const newBook=objBooks.filter(book=> book.id!=bookId)
    fs.writeFile(bookPath,JSON.stringify(newBook))
    res.status(200);
    res.send(newBook);
    }
    else{
        res.status(404).send('book not found')
    }
})
const port=3000;
app.listen(port,()=>{
    console.log(`app kelkunu - http://localhost:${port}`);
})

