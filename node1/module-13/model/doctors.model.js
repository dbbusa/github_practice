const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    _id:{type:String,required:true},
    name:{type:String,required:true},
    patientList:[{
        type:String,
        ref:'patients'
    }],
    department:{type:String,required:true}
   
}) 

const doctorModel = mongoose.model("doctors",doctorSchema)

module.exports = doctorModel;