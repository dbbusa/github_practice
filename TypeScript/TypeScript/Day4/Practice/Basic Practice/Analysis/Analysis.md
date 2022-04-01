# Day4 Practice

### MAP | SET | DATE OBJECT | TUPLE

1. Tuple
* In Array holds multiple values of the same data type.
* May need to store a collection of values of different data types in a single variable. Arrays will not provide this feature
* But TypeScript has a data type called Tuple to achieve this purpose. A Tuple is an array which store multiple fields belong to different data types.
* Read or access the fields of a tuple by using the index, which is the same as an array. 
* Example
```JavaSCript
    var employee : Array<[number,string]> = [[1,"A"],[2,"B"],[3,"C"]]
    console.log(employee
```

2. Map
* TypeScript map is a new data structure added in ES6 version of JavaScript. It allows us to store data in a key-value pair
*  In TypeScript map, we can use any value either as a key or as a value.

```JavaSCript
    let ageMapping = new Map();  
   
    ageMapping.set("Arazu", 20);  
    ageMapping.set("Dhruvi", 25);  
    ageMapping.set("Priya", 21);   
```

3. Set
* Sets are a bit similar to maps, but it stores only keys, not the key-value pairs.
```JavaScript
    let studentEntries = new Set();  
    
    studentEntries.add("Arazu");  
    studentEntries.add("Darshit");  
    studentEntries.add("Ankit");  
    studentEntries.add("Rutika");   
    studentEntries.add("Kuldeep");
    studentEntries.add("Ruturaj");  
```

4. Date Object
* The Date object represents a date and time functionality in TypeScript. It allows us to get or set the year, month and day, hour, minute, second, and millisecond.

* The Date object also provides the functions which deal with Coordinated Universal Time (UTC) time, also known as Greenwich Mean Time (GMT). The World Time Standard is based on UTC time.