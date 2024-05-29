const mongoose = require("mongoose");
const registeration = require('./userdata.js')


mongoose.connect(`mongodb+srv://amangupta121:Aman2003@cluster0.o4jamu0.mongodb.net/Users`)
.then(()=>{
console.log('Db connceted suffuly')
}).catch((err)=>{console.log('err',err.message)})