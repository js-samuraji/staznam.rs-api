const User = require("../../models/User");

const getUsers = (_req, res) => {
  User.find((err, users) => {
    if (err) return res.status(500).end();
    res.status(200).json({
      sucess: true,
      users: users
    });
  });
};

module.exports = getUsers;