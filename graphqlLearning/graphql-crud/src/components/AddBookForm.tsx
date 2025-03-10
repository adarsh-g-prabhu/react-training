import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_BOOK } from '../graphql/mutations'
import { GET_BOOKS } from '../graphql/queries'
import { AddBookData } from '../types'

const AddBookForm = () => {
  // State for form inputs
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [genre, setGenre] = useState<string>('')
  const [publishedYear, setPublishedYear] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  
  // Set up the mutation
  const [addBook, { loading }] = useMutation<AddBookData>(ADD_BOOK, {
    // Update cache after mutation
    refetchQueries: [{ query: GET_BOOKS }],
    onCompleted: () => {
      setMessage('Book added successfully!')

      setTitle('')
      setAuthor('')
      setGenre('')
      setPublishedYear('')
      
      // Clear success message after 3 seconds
      setTimeout(() => setMessage(''), 3000)
    },
    onError: (error) => {
      setMessage(`Error: ${error.message}`)
    }
  })
  
// Handle form submission
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validate form
    if (!title || !author) {
      setMessage('Title and author are required!');
      return;
    }
  
    // Convert publishedYear to number if provided
    const yearValue = publishedYear ? parseInt(publishedYear, 10) : null;
  
    // Call the mutation with variables matching the server's expected format
    addBook({
        variables: {
          title,
          author,
          genre: genre || null,
          publishedYear: yearValue,
        },
      });
  };
  
  
  return (
    <div className="add-book-form">
      <h2>Add a New Book</h2>
      
      {message && <div className={message.includes('Error') ? 'error' : 'success'}>{message}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="author">Author:</label>
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
          {loading ? 'Adding...' : 'Add Book'}
        </button>
      </form>
    </div>
  )
}

export default AddBookForm