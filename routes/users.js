const express = require("express");

const router = express.Router();

const getUsers = require("../controllers/users/getUsers");
const register = require("../controllers/users/register");

// Get all users in the database
router.get("/", getUsers);

// Registration
router.post('/', register)

module.exports = router;