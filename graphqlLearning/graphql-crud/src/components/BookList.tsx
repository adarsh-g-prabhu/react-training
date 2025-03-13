import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_BOOKS } from '../graphql/queries'
import BookDetails from './BookDetails'
import UpdateBookForm from './UpdateBookForm'
import DeleteBook from './DeleteBook'
import { Book, BooksData } from '../types'

const BookList = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [bookToUpdate, setBookToUpdate] = useState<Book | null>(null)
  const [bookToDelete, setBookToDelete] = useState<Book | null>(null)
  

  const { loading, error, data, refetch } = useQuery<BooksData>(GET_BOOKS)
  
  if (loading) return <p>Loading books...</p>
  if (error) return <p>Error loading books: {error.message}</p>
  if (!data || !data.books) return <p>No books found</p>
  
  return (
    <div className="book-list">
      <h2>All Books</h2>
      <button onClick={() => refetch()}>Refresh Books</button>
      
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.books.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre || 'N/A'}</td>
              <td>{book.publishedYear || 'N/A'}</td>
              <td>
                <button onClick={() => setSelectedBook(book)}>View</button>
                <button onClick={() => setBookToUpdate(book)}>Edit</button>
                <button onClick={() => setBookToDelete(book)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Show book details when a book is selected */}
      {selectedBook && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedBook(null)}>&times;</span>
            <BookDetails book={selectedBook} />
          </div>
        </div>
      )}
      
      {/* Show update form when edit is clicked */}
      {bookToUpdate && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setBookToUpdate(null)}>&times;</span>
            <UpdateBookForm 
              book={bookToUpdate} 
              onSuccess={() => {
                setBookToUpdate(null)
                refetch()
              }}
            />
          </div>
        </div>
      )}
      
      {/* Show delete confirmation when delete is clicked */}
      {bookToDelete && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setBookToDelete(null)}>&times;</span>
            <DeleteBook 
              book={bookToDelete} 
              onSuccess={() => {
                setBookToDelete(null)
                refetch()
              }}
              onCancel={() => setBookToDelete(null)}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default BookList