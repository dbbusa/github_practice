const express = require("express");

const router = express.Router();
const employeedomain = require("../../domain/controller.domain/employees.domain")
var assignment = require('./child/assignment.controller')


class employeeController{
    //to get all record
    static get(req,res){
        const emp = new employeedomain()
        emp.getAllemp(req,res)

    }
    //to return particular record
    static getOneEmp(req,res){
        const emp = new employeedomain()
        emp.getempRecord(req,res)

    }
    //to add new employee record
    static addEmployee(req,res){
        console.log("controller")
        const emp = new employeedomain()
        emp.addEmp(req,res)

    }
    //to update employee record
    static updateEmp(req,res){
        const emp = new employeedomain()
        emp.updateEmp(req,res)

    }
    // to delete employee record
    static deleteEmp(req,res){
        const emp = new employeedomain()
        emp.deleteEmp(req,res)

    }
}
router.use("/:empId/assignment",assignment) 
router.get("/",employeeController.get)
router.post("/",employeeController.addEmployee)
router.get("/:empId",employeeController.getOneEmp)

router.put("/:empId",employeeController.updateEmp)
router.delete("/:empId",employeeController.deleteEmp)
module.exports=router