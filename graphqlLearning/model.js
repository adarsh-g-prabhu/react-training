const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/graphql-books')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  publishedYear: Number
});

module.exports = mongoose.model('Book', BookSchema);