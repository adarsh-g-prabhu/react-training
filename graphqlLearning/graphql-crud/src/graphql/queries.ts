import { gql } from '@apollo/client';

// Query to get all books
export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
      genre
      publishedYear
    }
  }
`;

// Query to get a specific book by ID
export const GET_BOOK = gql`
  query GetBook($id: ID!) {
    book(id: $id) {
      id
      title
      author
      genre
      publishedYear
    }
  }
`;