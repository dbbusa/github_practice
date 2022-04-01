# Class 

   A class in terms of OOP is a blueprint for creating objects. A class encapsulates data for the object.

    class class_name { 
      //class scope 
    }
   ### Methods
   A method is similar to a function used to expose the behavior of an object.

    method_name : type{
       //methods code here
    }
   ### Constructors
  A constructor is used to initialize an object. 

    //defining constructor   
      constructor(id: number, name:string) {   
         this.id = id;  
         this.name = name;  
      } 
   ### object of class
  A class creates an object by using the new keyword followed by the class name.

    let object_name = new class_name(parameter) 

# Function

* Functions are the building blocks of readable, maintainable, and reusable code. A function is a set of statements to perform a specific task.

### 	Defining a Function
* A function declaration tells the compiler about the function name, function parameters, and return type.
```JavaScript
    function functionName( [arg1, arg2, ...argN] );   
```
### Calling a Function
*  We can call a function from anywhere in the program.We must pass the same number of functions as it is declared in the function declaration.
```JavaScript
    function();
    functiont(para1,para2); //if arguments
```
### Function Creation
*   We can create a function in two ways. 
   - Named function
   - Anonymous function
```JavaScript
    //named function
    functionName( [arguments] ) { }  

    //Anonymous function
    let res = function( [arguments] ) { }  
```


