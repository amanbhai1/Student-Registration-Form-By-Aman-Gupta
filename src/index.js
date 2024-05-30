const express = require("express");
const bodyparser = require("body-parser");
const path = require('path');
const registeration= require('./userdatabase/userdata')
require("./userdatabase/mongoose_conn")


const app = express();

const port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({ extended : false}));
app.use(express.json());

let mainfolderr =  path.join(__dirname,"../");

app.get('/',(req,res) =>{
    res.sendFile(mainfolderr + "/public/index.html");
})

app.get('/index',(req,res) =>{
    res.sendFile(mainfolderr + "/public/index.html");
})

app.post("/",(req,res)=>{
   try{
    console.log(req.body)
    let req_userdata = new registeration(req.body);
    console.log(req_userdata);
    req_userdata.save();
    res.redirect("/success");
   }
   catch(error){
    res.redirect("/error");
   }
})

app.get("/error",(req,res)=>{
    res.sendFile(mainfolderr + "/public/error.html")
})

app.get("/success",(req,res)=>{
    res.sendFile(mainfolderr + "/public/success.html")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})