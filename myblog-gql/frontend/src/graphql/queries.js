import { gql } from "@apollo/client";

export const GET_COMMENTS = gql`
  query GetComments($postId: ID!) {
    comments(postId: $postId) {
      _id
      comment
      createdAt
      userId {
        _id  
        name 
      }
    }
  }
`;

export const ADD_COMMENT = gql`
mutation AddComment($input: CommentInput!) {
  addComment(input: $input) {
    _id
    comment
    userId {
      _id
      name
    }
  }
}
`;


export const FETCH_POSTS_QUERY = gql`
    query GetPosts {
    posts {
      _id
      title
      content
      author
      createdAt
      imageUrl
    }
  }
`;

export const LOGIN=gql`
    query GetUser{
    user{
    _id
    name
    email
    password
    }
    }
`

export const GET_MY_POSTS = gql`
  query GetMyPosts($author: ID!) {
    myPosts(author: $author) {
      _id
      title
      content
      author
      createdAt
      imageUrl
    }
  }
`;

export const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      _id
      title
      content
      author
      createdAt
      imageUrl
      tags
    }
  }
`;