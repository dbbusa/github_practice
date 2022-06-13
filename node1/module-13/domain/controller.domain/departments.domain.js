const Department  = require("../../model/departments.model")
class departmentDomain{
    async getDepartments(req,res){
        const result = await Department.find();
        res.send(result);
        res.end()

    }
}

module.exports = departmentDomain;