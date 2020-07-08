const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');
const {
  registrationValidation
} = require('../../validation/userValidation');

const saltRounds = 10;

const register = async (req, res) => {
  try {
    // Data validation
    const {
      error
    } = registrationValidation(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    // Check whether the email already exists
    const emailExists = await User.findOne({
      email: req.body.email
    });
    if (emailExists)
      return res
        .status(400)
        .json('Email already registered');

    // Check whether the username already exists
    const usernameExists = await User.findOne({
      username: req.body.username
    });
    if (usernameExists)
      return res
        .status(400)
        .json('Username already taken');

    // Generate a salt and hash
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      if (err) return res.status(500).end();

      // Save user to database
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
      });

      user.save((err, user) => {
        if (err) return res.status(500).end();

        // Generate a token
        const accessToken = jwt.sign({
          sub: user._id,
          iat: Date.now()
        }, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: '7d'
        });
        return res.status(201).json(accessToken);
      });
    });
  } catch (err) {
    console.error(err);
    return res.status(500).end();
  }
};

module.exports = register;