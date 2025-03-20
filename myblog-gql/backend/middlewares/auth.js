const { AuthenticationError } = require("apollo-server-errors");

const authMiddleware = (resolver) => async (parent, args, context, info) => {
  if (!context.user) {
    throw new AuthenticationError("Not Authenticated! Please log in.");
  }
  return resolver(parent, args, context, info);
};

module.exports = authMiddleware;
