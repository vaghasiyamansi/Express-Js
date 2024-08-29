const jwt = require('jsonwebtoken');
const User = require("../models/user.model");
const { response } = require('express');

exports.verifyToken = async (req, res, next) => {
    try{
        let authorization = req.headers['authorization'];
        if(!authorization){
            return res.json({message: 'Not Authorized'});
        }
        let token = authorization.split(" ")[1];
        let payload = await jwt.verify(token, process.env.JWT_SECRET);
        if(!payload){
            return res.json(401).json({message: 'Not Authorized'});
        }

        let user = await User.findOne({_id: payload.userId, isDelete: false});
        // console.log(user);
        if(!user){
            return res.json(401).json({message: 'User not found'});
        }
        req.user = user;
        next();
    }catch (err) {
        console.log(err);
        res.json(500).json({message: 'server error'});
    }
};