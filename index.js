const repoContext = require("./repository/repository-wrapper");
const express = require('express'); // import express package into index.js and return a function stored in const 'express'
const app = express(); // store express function in app - this is industry convention

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(3000, function (){
    console.log("Server started. Listening on port 3000.");
});

app.get("/api/products", (req,res) =>{
    let products = repoContext.products.findAllProducts();
    res.send(products);
});

app.get("/api/products/:id", (req,res) => {
    let id = req.params.id;
    let product = repoContext.products.findProductById(id);
    res.send(product);
})

// middleware: middleware functions are functions that have access to the req and res objects in hte application's request-response cycle
// can terminate HTTP request or pass it on to another middleware using 'next'

app.post("/api/products", (req,res) => {
    let newProduct = req.body;
    let addedProduct = repoContext.products.createProduct(newProduct);
    res.send(addedProduct);
});

// IMPORTANT: when making a POST request, don't include primary key information. This is handled automatically on the server side.

app.put("/api/products", (req, res) => {
    let productToUpdate = req.body;
    let updatedProduct = repoContext.products.updateProduct(productToUpdate);
    res.send(updatedProduct);
});


