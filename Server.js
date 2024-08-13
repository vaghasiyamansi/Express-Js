const express = require('express');
const server = express();
const morgon = require('morgon');
const pruducts = require('./product.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgon('dev'));

app.get("/",(req,res)=>{
    res.send("Welcome to Express Server");
})

// CRUD

// Add New Product - Create

app.post("/products",(req,res)=>{
    consol.log = (req.body);
    products.push(req.body);
    res.json({product: req.body , message : 'Product added successfully'});
});

// Get All Products - Read

app.get("/products",(req,res)=>{
    res.json(products);
});

// Get Single Product - Read

app.get("/products/:id",(req,res)=>{
    let id = +req.params.id;
    let item = products.find(product => product.id === id);
    res.json(item);
});

//replace Data - Put
app.put('/products/:id', (req,res)=>{
    let id = +req.params.id;
    let productIndex = products.findIndex((product) => product.id === id);
    // console.log(productIndex);
    products.splice(productIndex, 1, {...product, ...req.body});
    res.json({message: "Product Replace Success"})
});

// Update Data - Patch
app.patch("/product/:id", (req,res)=>{
     let id = +req.params.id;
     let productIndex = products.findIndex((product) => product.id === id);
    //  console.log(productIndex);
    const product = products[productIndex];
    // console.log(product);
     products[productIndex] = {...products[productIndex],...req.body};
     res.json({message: "Product Updated Success"})
});

// Delete Data - Delete

app.delete("/products/:id",(req,res)=>{
    let id = +req.params.id;
    let productIndex - products.findIndex((product) => product.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1);
    res.json({product,message: "Product Delete Success"})
});

app.listen(1234, ()=>{
    console.log("server start");
})


// user api

server.get('/user',(req,res)=>{
    res.status(200);
    res.json({message:'user login successfuly'});
})

server.post('/user',(req,res)=>{
    res.status(201);
    res.json({message:'user post method'});
})
// server.get('/admin',mdlwr,(req,res)=>{
//     res.status(200);
//     res.json({message:'user login successfuly'});
//     res.end();
// })

// server.put('/user',(req,res)=>{
//     res.status(200);
//     res.json({message:'user put method'});
// })

// server.patch('/user',(req,res)=>{
//     res.status(200);
//     res.json({message:'user patch method'});
// })

// server.delete('/user',(req,res)=>{
//     res.status(200);
//     res.json({message:'user delete method'});
// })

server.listen(199,()=>{
console.log('server start at http://localhost:199');
});