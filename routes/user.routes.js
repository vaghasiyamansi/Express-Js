const express = require('express');
const { addNeUser} = require('../controller/user.controller');
const userRoutes = express.Router();

userRoutes.post("/", addNeUser);
userRoutes.get("/", getAllUser);
userRoutes.get("/get-user", getUser);

module.exports = userRoutes;