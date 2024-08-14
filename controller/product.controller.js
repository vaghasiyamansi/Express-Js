const products = ("../product.json");

exports.addNewProduct = (req,res) => {
    //   console.log(req.body);
    products.push(req.body);
    res.json({product: req.body , message: "Product added successfully"});
};

exports.getAllProducts = (req,res) => {
    res.json(products);
};

exports.getProduct = (req,res) => {
    let id = +req.params.id;
    let item = products.find((product) => product.id === id);
    // console.log(productIndex);
    products.splice(productIndex, 1, {...req.body});
    res.json({message: "Product Replace successfully"});
};

exports.updateProduct = (req,res) => {
    let id = +req.params.id;
    let productIndex = products.findIndex((product) => product.id === id);
    // console.log(productIndex);
    const product = products[productIndex];
    // console.log(product);
    products.splice(productIndex, 1, {...product,...req.body});
    res.json({message: "Product updated successfully"});
};

exports.deleteProduct = (req,res) => {
    let id = +req.params.id;
    let productIndex = products.findIndex((product) => product.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1);
    res.json({message: "Product deleted successfully"});
};

