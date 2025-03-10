import { gql } from '@apollo/client'

// Mutation to add a new book
export const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!, $genre: String, $publishedYear: Int) {
    addBook(title: $title, author: $author, genre: $genre, publishedYear: $publishedYear) {
      id
      title
      author
      genre
      publishedYear
    }
  }
`

// Mutation to update an existing book
export const UPDATE_BOOK = gql`
  mutation UpdateBook($id: ID!, $title: String, $author: String, $genre: String, $publishedYear: Int) {
    updateBook(id: $id, title: $title, author: $author, genre: $genre, publishedYear: $publishedYear) {
      id
      title
      author
      genre
      publishedYear
    }
  }
`

// Mutation to delete a book
export const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(id: $id)
  }
`