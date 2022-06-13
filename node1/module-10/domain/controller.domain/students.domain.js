/* const fs = require("fs") */

const studentModel = require("../../model/student.model")
class studentdomain{
    //to get all students
   async getAllStudents(req,res){
        const data =await studentModel.find()
        res.send(data)
        res.end()
    }
 async getStudentRecord(req,res){
        let id = req.params.studentId
        const result =await studentModel.findOne({ID:id})
        if(!result){
            return res.status(404).send("student not found")
        }
        res.send(result)
        res.end()
    }
    //to return particular fees record
  async getFees(req,res){
        let id = req.params.studentId
        const result =await studentModel.findOne({ID:id})
        if(!result){
            return res.status(404).send("student not found")
        }
        res.send(result.Fees)
        res.end()
    }
    //to return particular result record
  async getResult(req,res){
        let id = req.params.studentId
        const result =await studentModel.findOne({ID:id})
        if(!result){
            return res.status(404).send("student not found")
        }
        res.send(result.Result)
        res.end()
    }
    //to update result of student

}
module.exports=studentdomain