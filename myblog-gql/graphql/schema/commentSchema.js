const {gql}=require('apollo-server-express');

module.exports=gql `
type Comment{
    _id:ID
    postId:ID!
    userID:ID!
    comment:String!
}

input commentInput{
     postId:ID!
    userID:ID!
    comment:String!
}

type Query{
    comment(postID: ID!):[Comment!]!
}

 type Mutation {
    createComment(input: commentInput!): Comment!
}
`