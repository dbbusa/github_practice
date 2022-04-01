// Set - It allows us to store distinct data into the List similar to other programming languages.
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

// Map - It allows us to store data in a key-value pair and remembers the original insertion order of the keys 
let map = new Map();  
  
map.set('1', 'abhishek');     
map.set(1, 'www.javatpoint.com');       
map.set(true, 'bool1');   
map.set('2', 'ajay');  
  
console.log( "Value1= " + map.get(1));   
console.log("Value2= " + map.get('1'));   
console.log( "Key is Present= " +map.has(3));   
console.log( "Size= " +map.size);   
console.log( "Delete value= " +map.delete(1));   
console.log( "New Size= " +map.size );  

//Date() - The Date object represents a date and time functionality in TypeScript. It allows us to get or set the year, month and day, hour, minute, second, and millisecond.
let date: Date = new Date();  
console.log("Date = " + date); //Date = Tue Feb 05 2019 12:05:22 GMT+0530 (IST)  