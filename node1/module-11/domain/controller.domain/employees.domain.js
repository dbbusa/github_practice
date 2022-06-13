
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
    //to add a employee
    async addEmp(req,res){
        console.log("add")
        try{
          const emp = new empModel(req.body)
         await emp.save()
         res.send(emp)
        
        }
        catch(error){
           res.send(error)
        }
         
     } 
        //to update employee
  async updateEmp(req,res){
    try{
      const id = req.params.empId;
      await empModel.findOneAndUpdate({EmpId:id},req.body);
      res.send("update sucessfully")
    }
    catch(err){
      res.send(err);

  }
 


 }
   //to delete employee
   async deleteEmp(req,res){
    try{
      const id = req.params.empId;
      const data = await empModel.deleteOne({EmpId:id})
      res.send(data)

    }
    catch(err){
        res.status(404).send("employee not found")
    }
  
 }

}
module.exports=employeedomain