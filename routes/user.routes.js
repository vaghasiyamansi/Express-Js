const express = require('express');
const { addNeUser} = require('../controller/user.controller');
const userRoutes = express.Router();

userRoutes.post("/", addNeUser);

module.exports = userRoutes;