const Book = require('./model');

const resolvers = {
  Query: {
    books: async () => {
      // Get all books from the database
      return await Book.find({});
    },
    book: async (_, { id }) => {
      // Get a single book by ID
      return await Book.findById(id);
    }
  },
  Mutation: {
    addBook: async (_, { input }) => {
        // Create a new book using the fields from the input object
        const newBook = new Book(input);
        await newBook.save();
        return newBook;
      },
    updateBook: async (_, { id, ...rest }) => {
      // Update a book by ID
      return await Book.findByIdAndUpdate(
        id, 
        rest, 
        { new: true } // Return the updated book
      );
    },
    deleteBook: async (_, { id }) => {
      try {
        // Delete a book by ID
        await Book.findByIdAndDelete(id);
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    }
  }
};

module.exports = resolvers;