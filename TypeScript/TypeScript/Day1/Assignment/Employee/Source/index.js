"use strict";
exports.__esModule = true;
var employee = [
    {
        id: 1,
        fname: "Arazu",
        lname: "Kaneriya",
        address: "101 Rajkot Gujrat 360004",
        salary: 40000
    },
    {
        id: 2,
        fname: "Akshay",
        lname: "Sangani",
        address: "102 Pune Maharashtra 390004",
        salary: 45000
    },
    {
        id: 3,
        fname: "Panthil",
        lname: "Malaviya",
        address: "101 Surat Gujrat 390104",
        salary: 140000
    },
    {
        id: 4,
        fname: "Dhruvi",
        lname: "Koladia",
        address: "101 Bhopal Madhyapradesh 360004",
        salary: 40000
    },
    {
        id: 5,
        fname: "Smit",
        lname: "Dankhara",
        address: "107 Bangluru Karnataka 360004",
        salary: 80000
    }
];
console.log(employee);
//Search Element
console.log("Search Employee Using Employee Id");
var search_employee_id = 7;
function check(value) {
    return value.id == search_employee_id;
}
var issearch = employee.find(check);
if (issearch != null) {
    console.log(issearch);
}
else {
    console.log("No Employee Found");
}
console.log('');
//Insert New Value
console.log('Inser One New Employee');
var new_employee = {
    Id: 9,
    fname: "Rutika",
    lname: "Sorthiya",
    address: "204 Ahmedabad Gujrat 370001",
    salary: 21000
};
employee.push(new_employee);
console.log(employee);
console.log('');
//Delete Particulare Value
console.log('Delete Employee Using Employee Id');
var value_id = 3;
employee = employee.filter(function (item) { return item !== employee[value_id]; });
console.log(employee);
console.log('');
//Concate Fname and Lname
console.log('Display Fullname of Employee');
var fullname = [];
employee.forEach(function (value) {
    value.fullname = "".concat(value.fname, " ").concat(value.lname);
    fullname.push("".concat(value.fname, " ").concat(value.lname));
});
console.log(fullname);
console.log('');
console.log(employee);
//Splite Address
console.log('Splite Address');
var temp = '';
var flat = [];
var city = [];
var state = [];
var pin = [];
employee.forEach(Update_address);
function Update_address(value) {
    temp = value.address.split(' ');
    value.flat = temp[0];
    value.city = temp[1];
    value.state = temp[2];
    value.pin = temp[3];
    flat.push(temp[0]);
    city.push(temp[1]);
    state.push(temp[2]);
    pin.push(temp[3]);
}
console.log(flat);
console.log(city);
console.log(state);
console.log(pin);
console.log(employee);
//Employee PF Find
var employee_salary = [];
employee.forEach(function (value) {
    employee_salary.push(value.salary);
});
var PF = employee_salary.map(function (item) {
    return ((item * 12) / 100);
});
console.log(PF);
console.log(employee);
