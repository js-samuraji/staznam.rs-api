const bcrypt = require('bcrypt');

const User = require('../../models/User');
const {
  loginValidation
} = require('../../validation/userValidation');

const login = async (req, res) => {
  try {
    // Data validation
    const {
      error
    } = loginValidation(req.body);
    if (error) res.status(400).json(error.details[0].message);

    // Find user
    const user = await User.findOne({
      $or: [{
        email: req.body.login
      }, {
        username: req.body.login
      }]
    }).select('+password');
    if (!user) return res.status(400).json({
      success: false,
      message: 'User not found'
    });

    // Check the password
    bcrypt.compare(req.body.password, user.password, (err, same) => {
      if (err) return res.status(500).end();

      if (!same) return res.status(400).json({
        success: 'False',
        message: 'Wrong password'
      });

      return res.status(200).json({
        success: true,
        message: 'Logged in',
        username: user.username
      });
    });
  } catch (err) {
    res.status(500).end();
  }
}

module.exports = login;