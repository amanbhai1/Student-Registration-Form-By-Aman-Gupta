const mongoose = require("mongoose");

const registrationschema = new mongoose.Schema({
    fname : {type: String, required:true, lowercase:true},
    lname : {type: String, required:true, lowercase:true},
    email : {type: String, required:true, unique:true},
    fathername : {type: String, required:true, lowercase:true},
    course : {type: String, required:true},
    gender : {type: String, required:true},    
    dob : {type: Date, required:true},
    mobileno : {type: Number, required:true, unique:true},
    rollno: {type: String, required:true},
    section: {type: String, required:true},
    username : {type: String, required:true, lowercase:true},
    password: {type: String, required:true, lowercase:true}
})


const registeration = mongoose.model("registeration", registrationschema);
module.exports = registeration;