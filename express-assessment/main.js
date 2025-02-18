const { MongoClient } = require('mongodb');
const { getAllData, getSpecificBook } = require('./controllers/controls'); // Destructure to get the function
const express = require('express');
const app = express();
const cors= require('cors')
app.use(express.json());
app.use(cors());

let db;

async function connectDb() {
  const uri = 'mongodb://localhost:27017/Library'; 
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db('Library');
  } catch (err) {
    console.error('Error occurred:', err);
  }
}

connectDb().then(() => {
  app.get('/books/', async (req, res) => await getAllData(req, res, db));
  app.get('/books/:id',async (req, res) => await getSpecificBook(req, res, db))
  app.delete('/books/:id',async (req, res) => await deleteBook(req, res, db))
  app.put('books/:id',async (req, res) => await updateBook(req, res, db))
  app.post('/books/',async (req,res)=>await addBook(req,res,db))
  
});
app.listen(3000, () => console.log('App listening on http://localhost:3000/'));



