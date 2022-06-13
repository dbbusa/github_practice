
const empModel = require("../../model/employee.model")
class employeedomain{
    //to get all students
  async getAllemp(req,res){
        const data =await empModel.find()
        res.send(data)
        res.end()
    }
  async getempRecord(req,res){
        let id = req.params.empId
        const result =await empModel.findOne({EmpId:id})
        if(!result){
            return res.status(404).send("employee not found")
        }
        res.send(result)
        res.end()
    }
    //to return particular fees record
  async getAssignments(req,res){
        let id = req.params.empId
        
        const result =await empModel.findOne({EmpId:id})
        if(!result){
            return res.status(404).send("employee not found")
        }
        res.send(result.Assignments)
        res.end()
    }
  

}
module.exports=employeedomain