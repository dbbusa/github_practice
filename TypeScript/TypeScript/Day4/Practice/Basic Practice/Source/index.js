// User defined type
//Tuple
var employee = [[1, "A"], [2, "B"], [3, "C"]];
console.log(employee);
var person = [1, "Arazu"];
console.log(person);
let studentEntries = new Set();
//Add Values  
studentEntries.add("John");
studentEntries.add("Peter");
studentEntries.add("Gayle");
studentEntries.add("Kohli");
studentEntries.add("Dhawan");
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
ageMapping.set("Rakesh", 40);
ageMapping.set("Abhishek", 25);
ageMapping.set("Amit", 30);
//Iterate over map keys  
for (let key of ageMapping.keys()) {
    console.log("Map Keys= " + key);
}
//Iterate over map values  
for (let value of ageMapping.values()) {
    console.log("Map Values= " + value);
}
console.log("The Map Enteries are: ");
//Iterate over map entries  
for (let entry of ageMapping.entries()) {
    console.log(entry[0], entry[1]);
}
