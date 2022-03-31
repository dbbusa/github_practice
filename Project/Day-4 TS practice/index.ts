// Store 5 Employee Data(ID, Name, City, DOJ) in one Array. Search the employee with ID.
let empData:any[][] = [
    [201, 'Rutika', 'Rajkot','1-feb-2022'],
    [202, 'Sakshi', 'Surat','1-aug-2020'],
    [203, 'Priya', 'Ahemdabad','1-feb-2018'],
    [204, 'Drashti', 'Bhavnagar','1-apr-2021'],
    [205, 'Shruti', 'Vadodara','1-march-2021']
]

let empId= 202;

var flag = 0;

for(let i=0;i<empData.length;i++){
    if(empId == empData[i][0]){
        console.log(empData[i]);
        flag=1;
    }
}

if(flag == 0){
    console.log('Employee Id not found')
 }

//  Search the employees who has joined after year 2020
console.log("Search the employees who has joined after year 2020");
let empYear = 2020;
var empJoinData:number[];

for(let i=0;i<empData.length;i++){
   var empDOJ = empData[i][3].split("-");
    empJoinData = [parseInt(empDOJ[2])];

   if(empJoinData[0] > 2020){
       console.log(empData[i])
   }
}

