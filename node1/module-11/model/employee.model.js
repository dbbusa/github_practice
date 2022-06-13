const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    EmpId:{type:Number,required:true},
    FirstName:{type:String,required:true,trim:true,lowercase:true,minlength:2,maxlength:20},
    LastName:{type:String,required:true,trim:true,lowercase:true,minlength:2,maxlength:20},
    Assignments:{type:Array,required:true},
   
})

const empModel = mongoose.model("employees",empSchema)
module.exports=empModel;