// User defined type
//Tuple
var employee : Array<[number,string]> = [[1,"A"],[2,"B"],[3,"C"]]
console.log(employee)

var person : Array<(number | string)> = [1,"Arazu"]

console.log(person)



let studentEntries = new Set();  
   
//Add Values  
studentEntries.add("Arazu");  
studentEntries.add("Darshit");  
studentEntries.add("Ankit");  
studentEntries.add("Rutika");   
studentEntries.add("Kuldeep");
studentEntries.add("Ruturaj");   

  
//Returns Set data  
console.log(studentEntries);   
   
//Check value is present or not  
console.log(studentEntries.has("Kohli"));        
console.log(studentEntries.has(10));        
   
//It returns size of Set  
console.log(studentEntries.size);    
   
//Delete a value from set  
console.log(studentEntries.delete("Dhawan"));      
   
//Clear whole Set  
studentEntries.clear();   
  
//Returns Set data after clear method.  
console.log(studentEntries); 


let ageMapping = new Map();  
   
ageMapping.set("Arazu", 20);  
ageMapping.set("Dhruvi", 25);  
ageMapping.set("Priya", 21);  
   
//Iterate over map keys  
for (let key of ageMapping.keys()) {  
    console.log("Map Keys= " +key);          
}  
//Iterate over map values  
for (let value of ageMapping.values()) {  
    console.log("Map Values= " +value);      
}  
console.log("The Map Enteries are: ");   
//Iterate over map entries  
for (let entry of ageMapping.entries()) {  
    console.log(entry[0], entry[1]);   
}  

//date object
let dates: Date = new Date();  
console.log("Date = " + dates);

let  date1: Date = new Date("2019-01-16");  
 console.log("Date = " + date1);

 let date: Date = new Date(2017, 4, 4, 17, 23, 42, 11);  
 date.setDate(13);  
 date.setMonth(13);  
 date.setFullYear(2013);  
 date.setHours(13);  
 date.setMinutes(13);  
 date.setSeconds(13);  