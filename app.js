const express = require("express");

const app = express();

app.get('../',(request,response)=>{
    response.send("HOME PAGE");
});

app.get("/about",(request,response)=>{
    response.send("home page");
});

app.listen(3000);

module.exports = app;