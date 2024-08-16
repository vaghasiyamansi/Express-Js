const express = require('express');
const app = express();
const morgone = require('morgone');
const productRoutes = require('./routes/product.routes')

// Database Connection
mongoose
      .connect("mongodb://127.0.0.1:27017/node8to10")
      .then(() => console.log('Database connection established successfully'))
      .catch(err=>console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});

app.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});

const productRoutes = require("../routes/product.routes");
const userRoutes = require("./routes/user.routes");

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.listen(1234, () => {
    console.log("Server started http://localhost:1234");
});


// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(morgone("dev"));

// app.get("/", (req, res) => {
//     res.send("Welcome to Express Server");
// });

// app.use('/api/products', productRoutes);

// app.listen(1234 , () =>{
//     console.log("server start");
// });