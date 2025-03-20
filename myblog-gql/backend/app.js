const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const cors = require('cors');
const routes = require('./routes');
const { createApolloServer, expressMiddleware } = require('./graphql/server');
const context = require('./graphql/context');
const connectDB = require('./config/db');

const createApp = async () => {
  const app = express();

  await connectDB();

  app.use(cors({ origin: "http://localhost:5174", credentials: true }));
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  const server = await createApolloServer();
  app.use('/graphql', expressMiddleware(server, { context }));

  app.use('/', routes);

  app.use((req, res, next) => {
    if (!req.originalUrl.startsWith('/graphql')) {
      return res.status(404).json({ error: 'Not Found' });
    }
    next();
  });

  app.use((err, req, res, next) => {
    console.error(err);
    if (req.originalUrl.startsWith('/graphql')) {
      return res.status(err.status || 500).json({ error: err.message });
    }
    res.status(err.status || 500).json({
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
  });

  return app;
};

module.exports = createApp;
