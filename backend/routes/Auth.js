// routes/Auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middlewares/Auth');

router.post('/register', async (req, res) => {
  const { firstname,lastname,contactno,username, password, role } = req.body;
  const user = new User({ firstname, lastname, contactno, username, password, role });
  await user.save();
  res.send({ token: user.generateAuthToken() });
  res.status(201).json({ message: 'User registered successfully' });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).send('Invalid credentials');
  }
  res.send({ token: user.generateAuthToken() });
});

router.get('/profile', authMiddleware(), (req, res) => {
  res.send(req.user);
});

module.exports = router;
