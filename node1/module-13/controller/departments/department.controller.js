const express = require("express");
const departmentDomain = require("../../domain/controller.domain/departments.domain")
const router = express.Router();
class departmentController{
    static getdepartments(req,res){
        const department =new departmentDomain()
        department.getDepartments(req,res)

    } 
}
router.get("/",departmentController.getdepartments)

module.exports=router;