import './style.css'
const employee_body = document.querySelector('#employee_body') as HTMLDivElement
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


var fullname : Array<string> = [];
employee.forEach(myfun);
function myfun(value : any){
    value.fullname =`${value.fname} ${value.lname}`
    fullname.push(`${value.fname} ${value.lname}`)
}
console.log(fullname)

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
for(let ids in employee ){
  employee_body.innerHTML += `<tr><td>${employee[ids].id}</td><td>${employee[ids].fname}</td><td>${employee[ids].lname}</td><td>${employee[ids].fullname}</td><td>${employee[ids].address}</td><td>${employee[ids].flat}</td><td>${employee[ids].city}</td><td>${employee[ids].state}</td><td>${employee[ids].pin}</td><td>${employee[ids].salary}</td></tr>` 
}
console.log(flat)
console.log(city)
console.log(state)
console.log(pin)

