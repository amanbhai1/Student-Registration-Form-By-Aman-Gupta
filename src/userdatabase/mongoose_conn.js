const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const registeration = require('./userdata.js')

const username = process.env.MONGOOSE_USERNAME;
const password = process.env.MONGOOSE_PASSWORD;

mongoose.connect(`mongodb+srv://amangupta121:Aman2003@cluster0.o4jamu0.mongodb.net/Users`)
.then(()=>{
console.log('Db connceted suffuly')
}).catch((err)=>{console.log('err',err.message)})