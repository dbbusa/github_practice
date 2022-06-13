const express = require("express")
const mongoose = require("mongoose")
const department = require("./controller/departments/department.controller")
const doctor = require("./controller/doctors/doctor.controller")
const patient = require("./controller/patients/patient.controller")
mongoose.connect("mongodb://localhost:27017/hospital").then(
    ()=>{
        const app = express();
        app.get("/",(req,res)=>{
            res.send("welcome to the hospital use /departments /doctors and /patients")
        })
        app.use(express.json())
       app.use("/departments",department)
       app.use("/doctors",doctor)
       app.use("/patients",patient)
        app.listen(3000,()=>{
            console.log("server started at 3000")
        })
        app.use((err,req,res,next)=>{
            console.log(err.message)
            res.send(err)
        })
    }
)
.catch((err)=>{
    console.log("database not connected",err);
})