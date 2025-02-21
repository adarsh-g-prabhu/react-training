
const verifyToken = (req, res, next) => {
    console.log('hey');
    const token = req.header("Authorization");
    console.log('token',token);
    console.log('header', req.header)
    if (!token) return res.status(403).json({ message: "Access Denied" });
  console.log('token ok')
    jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(401).json({ message: "Invalid Token" });
      req.user = user;
      next();
    });
  };

    module.exports  ={
    verifyToken
  }