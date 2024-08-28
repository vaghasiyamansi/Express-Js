const express = require('express');
const {registerUser, loginUser, userProfile} = require('../controller/user.controller');
const userRoutes = express.Router();

const{verifyToken} = require('../helper/verifyToken');

// userRoutes.post("/", addNeUser);
// userRoutes.get("/", getAllUser);
// userRoutes.get("/get-user", getUser);
// userRoutes.put("/", updateUser);
// userRoutes.delete("/", deleteUser);


userRoutes.post("/register", registerUser);
userRoutes.post("/Login", loginUser);

userRoutes.get("/me", verifyToken, userProfile);

module.exports = userRoutes;