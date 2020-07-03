const User = require("../../models/User");

const getUsers = async (_req, res) => {
  User.find((err, users) => {
    if (err) return console.error(err);
    res.status(200).json(users);
  });
};

module.exports = getUsers;
