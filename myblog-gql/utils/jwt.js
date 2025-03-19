const jwt = require("jsonwebtoken");
require('dotenv').config();
const generateAccessToken = (user) => {
  return jwt.sign(
    { userId: user._id, email: user.email, username: user.name, userRole: user.userRole },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "15m" }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { userId: user._id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" } 
  );
};



module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
