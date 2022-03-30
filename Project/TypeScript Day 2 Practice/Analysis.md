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

   Functions are the building blocks of readable, maintainable, and reusable code. A function is a set of statements to perform a specific task.

   ### 	Defining a Function
   A function declaration tells the compiler about the function name, function parameters, and return type.

    function functionName( [arg1, arg2, ...argN] );   

   ### Calling a Function
   We can call a function from anywhere in the program.We must pass the same number of functions as it is declared in the function declaration.

    function();
    functiont(para1,para2); //if arguments

   ### Function Creation
   We can create a function in two ways. 
   - Named function
   - Anonymous function

    //named function
    functionName( [arguments] ) { }  

    //Anonymous function
    let res = function( [arguments] ) { }  

# Enum
 Enums stands for Enumerations.It is used to define the set of named constants, i.e., a collection of related values. 

### Numeric Enums

Numeric enums are number-based enums, which store values as numbers.

      enum Direction {  
      Up = 1,  
      Down,  
      Left,  
      Right,  
      }  

### String Enums
      enum AppStatus {  
      ACTIVE = 'ACT',  
      INACTIVE = 'INACT',  
      ONHOLD = 'HLD',  
      ONSTOP = 'STOP'  
      }  


# Tuples

   A Tuple is an array which store multiple fields belong to different data types. It is similar to the structures

      var tuple1: [number,string][] ;
      tuple1 = [
      [1,"Rutika"],
      [2,"Kartik"],
      [3,"Naira"]
      ];

# Union

   In Union we can define a variable which can have multiple types of values.Combine one or two different types of data (i.e., number, string, etc.) 

      let value: number|string;  
      value = 120;  
      console.log("The Numeric value is: "+value);  
      value = "Hello World";  
      console.log("The String value is: "+value);  

# Interface

 