import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_BOOK } from '../graphql/mutations'
import { Book, UpdateBookData } from '../types'

interface UpdateBookFormProps {
  book: Book
  onSuccess: () => void
}

const UpdateBookForm = ({ book, onSuccess }: UpdateBookFormProps) => {
  // Initialize form state with book data
  const [title, setTitle] = useState<string>(book.title)
  const [author, setAuthor] = useState<string>(book.author)
  const [genre, setGenre] = useState<string>(book.genre || '')
  const [publishedYear, setPublishedYear] = useState<string>(book.publishedYear?.toString() || '')
  const [message, setMessage] = useState<string>('')
  
  // Set up the mutation
  const [updateBook, { loading }] = useMutation<UpdateBookData>(UPDATE_BOOK, {
    onCompleted: () => {
      setMessage('Book updated successfully!')
      if (onSuccess) {
        setTimeout(onSuccess, 1500)
      }
    },
    onError: (error) => {
      setMessage(`Error: ${error.message}`)
    }
  })
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!title || !author) {
      setMessage('Title and author are required!')
      return
    }
    
    // Convert publishedYear to number if provided
    const yearValue = publishedYear ? parseInt(publishedYear, 10) : null
    
    // Call the mutation
    updateBook({ 
      variables: { 
          id: book.id,
          title, 
          author, 
          genre: genre || null, 
          publishedYear: yearValue

      } 
    })
  }
  
  return (
    <div className="update-book-form">
      <h2>Update Book</h2>
      
      {message && <div className={message.includes('Error') ? 'error' : 'success'}>{message}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title*:</label>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="author">Author*:</label>
          <input 
            type="text" 
            id="author" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <input 
            type="text" 
            id="genre" 
            value={genre} 
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="publishedYear">Published Year:</label>
          <input 
            type="number" 
            id="publishedYear" 
            value={publishedYear} 
            onChange={(e) => setPublishedYear(e.target.value)}
            min="1000"
            max="9999"
          />
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update Book'}
        </button>
      </form>
    </div>
  )
}

export default UpdateBookForm