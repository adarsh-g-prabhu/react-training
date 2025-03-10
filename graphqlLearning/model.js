const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/graphql-books')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define Book schema
const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  publishedYear: Number
});

module.exports = mongoose.model('Book', BookSchema);