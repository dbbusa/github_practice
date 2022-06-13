const express = require("express")
const patientdomain = require("../../../domain/controller.domain/patients.domain")
const router = express.Router({mergeParams:true})
class childController{
     static getDrugList(req,res){
         console.log("list")
         const data = new patientdomain()
         data.getDrugList(req,res)
     }
}
router.get("/",childController.getDrugList)
module.exports=router