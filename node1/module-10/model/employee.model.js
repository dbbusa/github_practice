const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    EmpId:{type:Number,required:true,trim:true},
    FirstName:{type:String,required:true,trim:true},
    LastName:{type:Number,required:true,trim:true},
    Assignments:{type:Array,required:true,trim:true},
   
})

const empModel = mongoose.model("employees",empSchema)
module.exports=empModel;