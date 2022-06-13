const express = require("express");
const patientDomain = require("../../domain/controller.domain/patients.domain")
const drugs = require("./child/drugs")
const router = express.Router();
class patientController{
    static getpatients(req,res){
        const patient =new patientDomain()
        patient.getpatients(req,res)

    } 
    static getpatientrecord(req,res){
        const patient =new patientDomain()
        patient.getpatientRecord(req,res)

    } 
}
router.use("/:patientId/drugs",drugs)
router.get("/",patientController.getpatients)
router.get("/:patientId",patientController.getpatientrecord)

module.exports=router;