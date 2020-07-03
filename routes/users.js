const express = require("express");

const router = express.Router();

const getUsers = require("../controllers/users/getUsers");

// Get all users in the database
router.get("/", getUsers);

module.exports = router;
