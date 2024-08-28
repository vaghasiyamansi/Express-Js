require("dotenv").config()
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const port = process.env.PORT;
const dbURL = process.env.MONGO_URI;
const path = require('path');

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(morgan("dev"));
server.use("/public/images",express.static(path.join(__dirname,"public/images")))


server.get("/",(req,res)=>{
    res.send("Welcome to the Express server");
});

// Product routes
const productRoutes = require("./routes/product.routes");
server.use("/api/product",productRoutes);

// User routes
const userRoutes = require("./routes/user.routes");
server.use("/api/users",userRoutes);

server.listen(port,()=>{
    // Database connection
    mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log(`Database connected..👍`))
    .catch(err=>console.log(err))
    console.log(`server start http://localhost:${port}`);
})