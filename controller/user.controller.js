const User = require("../model/user.model");

// Add New User
exports.addNewUser = async (req, res) => {
    try{
        // console.lg(req.body);
        const {firstName, LastName, email, hobbies, address, age} = req.body;
        let user = await User.findOne({email: email});
        if(user)
            return res.status(400).json({message: "User already exists..."});
        user = await User.create({
            firstName , lastName , email , age , hobbies , address,
        });
        user.save();
        res.status(201).json({user, messag: "User Added"});
    }catch(error){
     console.log(error);
     res.status(500).json({message: "Intrnal Server Error"});
    }
};

// Get All Users
exports.getAllUser = async (req, res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
};

// Get User
exports.getUser = async (req, res)=>{
    try{
        // let user = await User.findOne({_id: req.query.userId});
        let user = await User.findById(req.query.userid);
        if(!user)
            return res.status(404).json({message: "User not found..."});
        res.status(200).res.json(user);
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
};