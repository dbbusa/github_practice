const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    ID:{type:Number,required:true,trim:true},
    Name:{type:String,required:true,trim:true},
    Address:{type:Number,required:true,trim:true},
    Result:{type:Object,required:true,trim:true},
    Fees:{type:Object,required:true,trim:true},
})

const studentModel = mongoose.model("students",studentSchema)
module.exports=studentModel;