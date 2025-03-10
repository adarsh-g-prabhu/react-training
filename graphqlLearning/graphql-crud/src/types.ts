// Book interface defines the structure of a book object
export interface Book {
    id: string;
    title: string;
    author: string;
    genre?: string | null;
    publishedYear?: number | null;
  }
  
  // For the AddBook mutation, use separate variables instead of an input object
  export interface AddBookVariables {
    title: string;
    author: string;
    genre?: string | null;
    publishedYear?: number | null;
  }  
  // For the UpdateBook mutation, pass variables directly
  export interface UpdateBookVariables {
    id: string;
    title?: string;
    author?: string;
    genre?: string | null;
    publishedYear?: number | null;
  }
  
  // For the DeleteBook mutation
  export interface DeleteBookVariables {
    id: string;
  }
  
  // Query response interfaces
  export interface BooksData {
    books: Book[];
  }
  
  export interface BookData {
    book: Book;
  }
  
  // Mutation response interfaces
  export interface AddBookData {
    addBook: Book;
  }
  
  export interface UpdateBookData {
    updateBook: Book;
  }
  
  export interface DeleteBookData {
    deleteBook: boolean;
  }
  