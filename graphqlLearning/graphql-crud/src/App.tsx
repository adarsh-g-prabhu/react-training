import { useState } from 'react'
import './App.css'
import BookList from './components/BookList'
import AddBookForm from './components/AddBookForm'

function App() {
  const [showAddForm, setShowAddForm] = useState<boolean>(false)

  return (
    <div className="App">
      <header>
        <h1>GraphQL Books Library</h1>
      </header>

      <main>
        <div className="action-buttons">
          <button onClick={() => setShowAddForm(!showAddForm)}>
            {showAddForm ? 'Hide Add Form' : 'Add New Book'}
          </button>
        </div>

        {showAddForm && (
          <div className="form-container">
            <AddBookForm />
          </div>
        )}

        <div className="list-container">
          <BookList />
        </div>
      </main>

      <footer>
        <p>GraphQL CRUD Application with React and Apollo Client</p>
      </footer>
    </div>
  )
}

export default App