const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    ID:{type:Number,required:true},
    Name:{type:String,required:true,trim:true,minlength:5,maxlength:255},
    Address:{type:String,required:true,trim:true,minlength:5,maxlength:255},
    Result:{
        Hindi:{type:Number,required:true},
        Eng:{type:Number,required:true},
        Math:{type:Number,required:true},
        Total:{type:Number,required:true},
        Grade:{type:String,required:true}
    },
    Fees:{
        Amount:{type:Number,required:true},
        PaymentDate:{type:String,required:true},
        Status:{type:String,required:true}
    },
})

const studentModel = mongoose.model("students",studentSchema)
module.exports=studentModel;