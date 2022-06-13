const express = require("express");
const doctorDomain = require("../../domain/controller.domain/doctors.domain")
const patients = require("./child/patient")
const router = express.Router();
class doctorController{
    static getdoctors(req,res){
        const doctor =new doctorDomain()
        doctor.getdoctors(req,res)

    }
    static getOneDocter(req,res){
        const docter = new doctorDomain()
        docter.getdoctorRecord(req,res)
    }
    static addDoctor(req,res){
        const doctor = new doctorDomain()
        doctor.adddoctor(req,res)
    }
    static updateDoctor(req,res){
        console.log("update")
        const doctor = new doctorDomain()
        doctor.updateDoctor(req,res)
    }
    static deleteDoctor(req,res){
        const doctor = new doctorDomain()
        doctor.deleteDocter(req,res)
    }
}
router.use("/:doctorId/patients",patients)
router.get("/",doctorController.getdoctors)
router.get("/:doctorId",doctorController.getOneDocter)
router.post("/",doctorController.addDoctor)
router.put("/:doctorId",doctorController.updateDoctor)
router.delete("/:doctorId",doctorController.deleteDoctor)

module.exports=router;