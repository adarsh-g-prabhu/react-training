import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { DELETE_BOOK } from '../graphql/mutations'
import { GET_BOOKS } from '../graphql/queries'
import { Book, DeleteBookData } from '../types'

interface DeleteBookProps {
  book: Book
  onSuccess: () => void
  onCancel: () => void
}

const DeleteBook = ({ book, onSuccess, onCancel }: DeleteBookProps) => {
  const [message, setMessage] = useState<string>('')
  
  // Set up the mutation
  const [deleteBook, { loading }] = useMutation<DeleteBookData, { id: string }>(DELETE_BOOK, {
    // Update cache after deletion
    refetchQueries: [{ query: GET_BOOKS }],
    onCompleted: (data) => {
      if (data?.deleteBook) {
        setMessage('Book deleted successfully!')
        if (onSuccess) {
          setTimeout(onSuccess, 1500)
        }
      } else {
        setMessage('Failed to delete book.')
      }
    },
    onError: (error) => {
      setMessage(`Error: ${error.message}`)
    }
  })
  
  // Handle delete confirmation
  const handleDelete = () => {
    deleteBook({ 
      variables: { id: book.id } 
    })
  }
  
  return (
    <div className="delete-book">
      <h2>Delete Book</h2>
      
      {message ? (
        <div className={message.includes('Error') || message.includes('Failed') ? 'error' : 'success'}>
          {message}
        </div>
      ) : (
        <>
          <p>Are you sure you want to delete the book "{book.title}" by {book.author}?</p>
          <p>This action cannot be undone.</p>
          
          <div className="button-group">
            <button 
              onClick={handleDelete} 
              disabled={loading} 
              className="delete-button"
            >
              {loading ? 'Deleting...' : 'Yes, Delete Book'}
            </button>
            <button 
              onClick={onCancel} 
              disabled={loading}
              className="cancel-button"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default DeleteBook