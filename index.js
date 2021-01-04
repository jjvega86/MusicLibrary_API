const repoContext = require("./repository/repository-wrapper");
const express = require('express'); // import express package into index.js and return a function stored in const 'express'
const app = express(); // store express function in app - this is industry convention

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


