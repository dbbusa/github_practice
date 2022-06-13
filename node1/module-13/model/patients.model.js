const mongoose = require("mongoose");


const patientSchema = new mongoose.Schema({
    _id:String,
    name:String,
    doctorList:[{
        type:String,
        ref:'doctors'
    }],
    assistanceList:[{
        type:String,
        ref:'departments'
    }],
    drugs:{
        type:[{
            drugName:String,
            time:{
                type:String,
                enum:["morning","afternoon","night"]
            }
        }],
        required:true

    },

        
})

const patientModel = mongoose.model("patients",patientSchema)

module.exports = patientModel;