// middlewares/Auth.js
const jwt = require('jsonwebtoken');

const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).send('Access denied');
      }
      next();
    } catch (e) {
      res.status(401).send('Invalid token');
    }
  };
};

module.exports = authMiddleware;
