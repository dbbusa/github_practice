var employee :Array<any> = [
                            {
                              id:1,
                              fname : "Arazu",
                              lname : "Kaneriya",
                              address : "101 Rajkot Gujrat 360004",
                              salary : 40000
                            },
                            {
                              id:2,
                              fname : "Akshay",
                              lname : "Sangani",
                              address : "102 Pune Maharashtra 390004",
                              salary : 45000
                            },
                            {
                              id:3,
                              fname : "Panthil",
                              lname : "Malaviya",
                              address : "101 Surat Gujrat 390104",
                              salary : 140000
                            },
                            {
                              id:4,
                              fname : "Dhruvi",
                              lname : "Koladia",
                              address : "101 Bhopal Madhyapradesh 360004",
                              salary : 40000
                            },
                            {
                              id:5,
                              fname : "Smit",
                              lname : "Dankhara",
                              address : "107 Bangluru Karnataka 360004",
                              salary : 80000
                            }
                          ]
console.log(employee)

//Search Element
console.log("Search Employee Using Employee Id")
var search_employee_id : number = 7
function check(value){
  return value.id == search_employee_id
}
var issearch = employee.find(check)
if(issearch != null){
  console.log(issearch)
}else{
  console.log("No Employee Found")
}
console.log('')

//Insert New Value
console.log('Inser One New Employee')
var new_employee : any = {
    Id : 9,
    fname:"Rutika",
    lname:"Sorthiya",
    address : "204 Ahmedabad Gujrat 370001",
    salary : 21000 
}
employee.push(new_employee)
console.log(employee)
console.log('')



//Delete Particulare Value
console.log('Delete Employee Using Employee Id')
let value_id : number = 3
employee =  employee.filter(item => item !==  employee[value_id])
console.log(employee)
console.log('')

//Concate Fname and Lname
console.log('Display Fullname of Employee')
var fullname : Array<string> = [];
employee.forEach((value : any)=>{
    value.fullname =`${value.fname} ${value.lname}`
    fullname.push(`${value.fname} ${value.lname}`)
});
console.log(fullname)
console.log('')
console.log(employee)

//Splite Address
console.log('Splite Address')
var temp : any = '';
var flat : Array<number> = [];
var city : Array<string> = [];
var state : Array<string> = [];
var pin : Array<number> = [];
employee.forEach(Update_address);
function Update_address(value : any){
    temp = value.address.split(' ');
    value.flat = temp[0]
    value.city = temp[1]
    value.state = temp[2]
    value.pin = temp[3]
    flat.push(temp[0])
    city.push(temp[1])
    state.push(temp[2])
    pin.push(temp[3])
}
console.log(flat)
console.log(city)
console.log(state)
console.log(pin)
console.log(employee)

//Employee PF Find
var employee_salary : Array<number> = [];
employee.forEach((value : any)=>{
  employee_salary.push(value.salary)
})
const PF : Array<number> = employee_salary.map((item)=>{
        return ((item * 12)/100)
})
console.log(PF)

console.log(employee)