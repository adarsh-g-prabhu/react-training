const jwt = require('jsonwebtoken');

const context = ({ req }) => {
  console.log('hhhh',req.headers.authorization)
  const token = req.headers.authorization?.split(" ")[1]; 

  if (!token) return { user: null }; 

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return { user: decoded }; 
  } catch (error) {
    console.error("Invalid Token:", error.message);
    return { user: null };
  }
};

module.exports = context;
