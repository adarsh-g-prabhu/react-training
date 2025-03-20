const jwt =require('jsonwebtoken')


const verifyToken = (req, res, next) => {
    const token = req.header("Authorization");
   
    if (!token) return res.status(403).json({ message: "Access Denied" });
 
   jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) return res.status(401).json({ message: "Invalid Token" });
      req.user = user;
      next();
    });
  };

    module.exports  ={
    verifyToken
  }