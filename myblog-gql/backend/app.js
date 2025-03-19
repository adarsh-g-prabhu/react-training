// app.js
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const cors = require('cors');
const postSchema = require('./graphql/schema/postSchema');
const postResolvers = require('./graphql/resolvers/postResolver');
const routes = require('./routes');

const createApp = async () => {
  const app = express();


  await mongoose.connect(process.env.MONGODB_URL);
  console.log('Connected to MongoDB');

 
  app.use(cors({
    origin: "http://localhost:5174",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }));

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));


  // app.get('/favicon.ico', (req, res) => res.status(204).end());


  const server = new ApolloServer({
    typeDefs: postSchema,
    resolvers: postResolvers,
    // context: async ({ req }) => {

    //   return { user: { id: "localUser", role: "admin" } };
    // },
    plugins: [
      require('@apollo/server-plugin-landing-page-graphql-playground')
        .ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });

  await server.start();

 
  app.use('/graphql', expressMiddleware(server, {
    context: async ({ req }) => ({ user: { id: "localUser", role: "admin" } })
  }));


  app.use('/', routes);


  app.use((req, res, next) => {
    if (req.originalUrl.startsWith('/graphql')) {
      return next();
    }
    const createError = require('http-errors');
    next(createError(404));
  });


  app.use((err, req, res, next) => {
    if (req.originalUrl.startsWith('/graphql')) {
      return res.status(err.status || 500).json({ error: err.message });
    }
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
  });

  return app;
};

module.exports = createApp();
