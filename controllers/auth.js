const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const { User } = require('../models/User');
require('dotenv').config();

// eslint-disable-next-line consistent-return
const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ email })
    if (user) {
      return res.status(500).send('email already exists')
    }
    const newUser = new User({
      name,
      email,
      password,
    })
    await newUser.save();
    const token = jwt.sign({ email: newUser.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
}

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const profile = async (req, res) => {
  res.status(200).json({ user: req.user });
}

module.exports = { register, login, profile }
