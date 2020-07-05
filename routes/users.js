const express = require("express");

const router = express.Router();

const getUsers = require('../controllers/users/getUsers');
const register = require('../controllers/users/register');
const login = require('../controllers/users/login');

// Get all users in the database
router.get('/', getUsers);

// Registration
router.post('/', register);

// Login
router.put('/', login);

module.exports = router;