const { static } = require("express");
const express = require("express");
const hbs = require("hbs");
const { read } = require("fs");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname,"../public");
const viewsPath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

hbs.registerPartials(partialsPath);
app.set('views',viewsPath);
app.set('view engine', 'hbs');
app.use(express.static(staticPath));

// Routing
app.get("/",(req,res)=>{
    res.render('index');
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("/weather",(req,res)=>{
    res.render('weather');
})
app.get("*",(req,res)=>{
    res.render('404error')
})


app.listen(port,()=>{
    console.log(`Listening to the port at ${port}`)
})