import { Book } from '../types'

interface BookDetailsProps {
  book: Book
}

const BookDetails = ({ book }: BookDetailsProps) => {
  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre || 'Not specified'}</p>
      <p><strong>Published Year:</strong> {book.publishedYear || 'Not specified'}</p>
      <p><strong>ID:</strong> {book.id}</p>
    </div>
  )
}

export default BookDetails