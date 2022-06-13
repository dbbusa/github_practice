const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    _id:String,
    name:String,
    docterList:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'doctors'
    }],
    assistantList:Array
})

const departmentModel = mongoose.model("departments",departmentSchema);

module.exports=departmentModel;