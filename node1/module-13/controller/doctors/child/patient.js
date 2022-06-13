const express = require("express")
const docterdomain = require("../../../domain/controller.domain/doctors.domain")
const router = express.Router({mergeParams:true})
class childController{
     static getList(req,res){
         console.log("list")
         const data = new docterdomain()
         data.getpatientList(req,res)
     }
}
router.get("/",childController.getList)
module.exports=router
