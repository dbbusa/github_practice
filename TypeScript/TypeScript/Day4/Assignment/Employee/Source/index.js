var employee = [
    {
        id: 1,
        name: "Arazu Kaneriya",
        city: "Mumbai",
        DOJ: new Date(Date.UTC(2020, 0, 20))
    },
    {
        id: 2,
        name: "Rutika Sorthiya",
        city: "Rajkot",
        DOJ: new Date(Date.UTC(2021, 1, 20))
    },
    {
        id: 3,
        name: "Kuldeep Jani",
        city: "Mumbai",
        DOJ: new Date(Date.UTC(2020, 0, 20))
    },
    {
        id: 4,
        name: "Ruturaj Gohil",
        city: "Bhavanagar",
        DOJ: new Date(Date.UTC(2021, 5, 22))
    },
    {
        id: 5,
        name: "Darshit Busa",
        city: "Mumbai",
        DOJ: new Date(Date.UTC(2021, 3, 10))
    },
    {
        id: 6,
        name: "Ankit Chauhan",
        city: "Mumbai",
        DOJ: new Date(Date.UTC(2020, 4, 15))
    }
];
var id = 1;
console.log("Search the employees using id");
console.log("---------------------------------------------------------------------------");
for (var i = 0; i < employee.length; i++) {
    if (id == employee[i].id) {
        console.log(employee[i]);
    }
}
console.log("");
console.log("Search the employees who has joined after year 2020");
console.log("---------------------------------------------------------------------------");
for (var i = 0; i < employee.length; i++) {
    var d = employee[i].DOJ;
    d.getYear();
    var x = d.getUTCFullYear();
    if (x > Number(2020)) {
        console.log(employee[i].name + "   " + employee[i].DOJ);
    }
}
console.log("");
console.log("Search the employee who has joined after year 2020 and stays in Mumbai city");
console.log("---------------------------------------------------------------------------");
for (var i = 0; i < employee.length; i++) {
    var d = employee[i].DOJ;
    d.getYear();
    var x = d.getUTCFullYear();
    if ((x > Number(2020)) && (employee[i].city == "Mumbai")) {
        console.log(employee[i].name + "   " + employee[i].DOJ);
    }
}
