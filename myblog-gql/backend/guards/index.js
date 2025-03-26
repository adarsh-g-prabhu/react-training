
const { rule, shield } = require("graphql-shield");
const { verifyToken } = require("../utils/jwt"); 

const isAuthorized = rule()(async (parent, args, ctx, info) => {
  const authHeader = ctx.request.headers.authorization;
  console.log('inside head',authHeader)
  if (!authHeader) return false;
  
  const token = authHeader.replace("Bearer", "").trim();
  
  try {
    const { userId } = verifyToken(token);
    return !!userId;
  } catch (e) {
    return false;
  }
});

const permissions = shield({
  Query: {
    
    login: () => true,
    register: () => true,
    "*": isAuthorized,
  },
  Mutation: {
 
    login: () => true,
    register: () => true,
   
    "*": isAuthorized,
  },
});

module.exports = { permissions };
