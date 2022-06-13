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
    //to add result of student
  async addStudent(req,res){
      try{
        const student = new studentModel(req.body)
       await student.save()
       res.send(student)
      }
      catch(ex){
          for(var field in ex.errors){
            console.log(ex.errors[field].message)
          }
          res.send(ex.errors)
          res.end()
      }
       
   } 
   //to update student
  async updateStudent(req,res){
      try{
        const id = req.params.studentId;
        await studentModel.findOneAndUpdate({ID:id},req.body);
        res.send("update sucessfully")
      }
      catch(err){
        res.send(err);

    }
   


   }
   //to delete student
  async deleteStudent(req,res){
      try{
        const id = req.params.studentId;
    const data = await studentModel.deleteOne({ID:id})
    res.send(data)

      }
      catch(err){
          res.status(404).send("student not found")
      }
    
   }

}
module.exports=studentdomain