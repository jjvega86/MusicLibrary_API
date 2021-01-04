const express = require('express'); // import express package into index.js and return a function stored in const 'express'
const app = express(); // store express function in app - this is industry convention

app.listen(3000, function (){
    console.log("Server started. Listening on port 3000.");
});