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

// Update User
exports.updateUser = async (req, res)=>{
    try{
        let user = await User.findById(req.query.userId);
        if(!user){
            return res.status(404).json({message: "User not Found...."});
        }
        // user = await User.updateOne({_id: req.query.userId}, {$set:req.body}, {new: true});
        user = await User.findByIdAndUpdate(req.query.userId, {$set:req.body}, {new: true});
    }catch(error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"})
    }
};

// Delete user
exports.deleteUser = async (req, res)=>{
    try{
        let user = await User.findone({_id: req.query.userid, isDelete: false});
        if(!user){
            return res.status(404).json({message: "User not Found...."});
        }
        user = await User.findByIdAndUpdate(
           user._id,
           {$set: {isDelete: true}},
           {new: true}
     );

     //user = await User.findOneAndDelete(user.id);

     res.status(200).json({message: "User deleted successfully"});
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
};

