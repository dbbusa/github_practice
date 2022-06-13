const express = require("express");

const router = express.Router();
const studentdomain = require("../../domain/controller.domain/students.domain")
var fees = require('./child/fees.controller')
var result = require('./child/result.controller')

class studentController{
    //to get all record
    static get(req,res){
        const student = new studentdomain()
        student.getAllStudents(req,res)

    }
    //to return particular record
    static getOnestudent(req,res){
        const student = new studentdomain()
        student.getStudentRecord(req,res)

    }
    static addStudent(req,res){
        const student = new studentdomain()
        student.addStudent(req,res)
    }
    static updateStudent(req,res){
        const student = new studentdomain()
        student.updateStudent(req,res)
    }
    static DeleteStudent(req,res){
        const student = new studentdomain()
        student.deleteStudent(req,res)
    }
}
 router.use("/:studentId/fees",fees)
router.use("/:studentId/result",result) 
router.get("/",studentController.get)
router.post("/",studentController.addStudent)
router.get("/:studentId",studentController.getOnestudent)
router.put("/:studentId",studentController.updateStudent)
router.delete("/:studentId",studentController.DeleteStudent)

module.exports=router