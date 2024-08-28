const express = require('express');
const {registerUser, loginUser, userProfile} = require('../controller/user.controller');
const userRoutes = express.Router();

const{verifyToken} = require('../helper/verifyToken');
const {upload} = require("../Helpers/imageUpload");


// userRoutes.post("/", addNeUser);
// userRoutes.get("/", getAllUser);
// userRoutes.get("/get-user", getUser);
// userRoutes.put("/", updateUser);
// userRoutes.delete("/", deleteUser);


userRoutes.post("/register", registerUser);
userRoutes.post("/Login", loginUser);

userRoutes.get("/me", verifyToken, userProfile);
userRoutes.put("/update-profile",verifyToken,updateProfile);
userRoutes.put("/change-password", verifyToken, changePassword);
userRoutes.delete('/delete-user',verifyToken, deleteUser);

module.exports = userRoutes;