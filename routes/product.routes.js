const express = require('express');
const app = express();


const{
    addNewProduct,
    getAllProducts,
    getProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
} = require("../controller/product.controller")

// Add New Product - create 
productRoutes.post("/", addNewProduct);

// Get All Products - Read
productRoutes.get("/", getAllProducts);

// Get Single Product - Read
productRoutes.get("/:id", getProduct);

// Replace Data - Put
productRoutes.post("/:id", replaceProduct);

// Update Data - Patch
productRoutes.patch("/:id", updateProduct);

//delete Product - Delete
productRoutes.delete("/", deleteProduct);

module.exports = productRoutes;