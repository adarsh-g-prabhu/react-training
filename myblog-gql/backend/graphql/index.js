const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

const commentSchema = require('./schema/commentSchema');
const postSchema = require('./schema/postSchema');
const userSchema = require('./schema/userSchema');

const commentResolvers = require('./resolvers/commentResolver');
const postResolvers = require('./resolvers/postResolver');
const userResolvers = require('./resolvers/userResolver');

const { GraphQLUpload } = require('graphql-upload');

const typeDefs = mergeTypeDefs([commentSchema, postSchema, userSchema]);
const resolvers = mergeResolvers([commentResolvers, postResolvers, userResolvers]);

// Map the Upload scalar so that file uploads are correctly processed
resolvers.Upload = GraphQLUpload;

module.exports = { typeDefs, resolvers };
