const patientModel  = require("../../model/patients.model")
class patientDomain{
    async getpatients(req,res){
        try{
            const result = await patientModel.find()
        res.send(result);
        res.end()

        }
        catch(err){
            console.log(err)
        }
    }
    //to get particular patient
    async getpatientRecord(req,res){
        let id = req.params.patientId
        console.log(id)
        const result =await patientModel.findById(id)
        if(!result){
            return res.status(404).send(`patient not found ${result}`)
        }
        res.send(result)
        res.end()
    }

 

 //to get patients of doctor
 async getDrugList(req,res){
    let id = req.params.patientId
    console.log(id)
    const result =await patientModel.findById(id)
    if(!result){
        return res.status(404).send(`patient not found ${result}`)
    }
    res.send(result.drugs)
    res.end()
}
}

module.exports = patientDomain;