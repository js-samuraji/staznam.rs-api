const User = require('../../models/User');

const getUsers = (_req, res) => {
  User.find((err, users) => {
    if (err) return res.status(500).end();
    return res.status(200).json(users);
  });
};

module.exports = getUsers;