const express = require('express');
const app = express();
const morgone = require('morgone');
const productRoutes = require('./routes/product.routes')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgone("dev"));

app.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});

app.use('/api/products', productRoutes);

app.listen(1234 , () =>{
    console.log("server start");
});