const express = require('express');
const {registerUser, loginUser} = require('../controller/user.controller');
const userRoutes = express.Router();

// userRoutes.post("/", addNeUser);
// userRoutes.get("/", getAllUser);
// userRoutes.get("/get-user", getUser);
// userRoutes.put("/", updateUser);
// userRoutes.delete("/", deleteUser);


userRoutes.post("/register", registerUser);
userRoutes.post("/Login", loginUser);

module.exports = userRoutes;