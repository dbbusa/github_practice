const doctorModel  = require("../../model/doctors.model")
class doctorDomain{
    async getdoctors(req,res){
        try{
            const result = await doctorModel.find().populate("patientList","name -_id").select('name patientList');
        res.send(result);
        res.end()

        }
        catch(err){
            console.log(err)
        }
    }
    //to fet particular doctor
    async getdoctorRecord(req,res){
        let id = req.params.doctorId
        console.log(id)
        const result =await doctorModel.findById(id)
        if(!result){
            return res.status(404).send(`doctor not found ${result}`)
        }
        res.send(result)
        res.end()
    }
    //to add a doctor
async adddoctor(req,res){
    console.log(req.body)
    try{
     const result = new doctorModel(req.body)
        
     await result.save()
     res.send(result)
    
    }
    catch(error){
       res.send(error.message)
    }
     
 }
  //to update doctor
  async updateDoctor(req,res){
    try{
        console.log("yeas")
      const id = req.params.doctorId;
      await doctorModel.findOneAndUpdate({_id:id},req.body);
      res.send("update sucessfully")
    }
    catch(err){
      res.send(err);

  }
 


 }
 //to delete doctor
 async deleteDocter(req,res){
    try{
      const id = req.params.doctorId;
  const data = await doctorModel.deleteOne({_id:id})
  res.send(data)

    }
    catch(err){
        res.status(404).send("docter not found")
    }
  
 }
 //to get patients of doctor
 async getpatientList(req,res){
    let id = req.params.doctorId
    console.log(id)
    const result =await doctorModel.findById(id).populate('patientList')
    if(!result){
        return res.status(404).send(`doctor not found ${result}`)
    }
    res.send(result.patientList)
    res.end()
}
}


module.exports = doctorDomain;