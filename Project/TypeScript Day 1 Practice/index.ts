class Greeter {
    greeting: string;
   
    constructor(message: string) {
      this.greeting = message;
      console.log("Simple class")
      console.log(this.greet())
    }
   
    greet() {
      return "Hello, " + this.greeting;
    }
  }
   
  let greeter = new Greeter("world");


  console.log("Inheritance")
  class Animal {
    move(distanceInMeters: number = 0) {
      console.log(`Animal moved ${distanceInMeters}m.`);
    }
  }
   
  class Dog extends Animal {
    bark() {
      console.log("Woof! Woof!");
    }
  }
   
  const dog = new Dog();
  dog.bark();
  dog.move(10);
  dog.bark();

  console.log("Public")
  class Student {  
    public studCode: number;  
    studName: string;  
}  
  
let stud1 = new Student();  
stud1.studCode = 101;  
stud1.studName = "Joe Root";  
  
console.log(stud1.studCode+ " "+stud1.studName);  

console.log("Private")
class Student1 {  
    public studCode: number;  
    private studName: string;  
    constructor(code: number, name: string){  
    this.studCode = code;  
    this.studName = name;  
    }  
    public display() {  
    return (`My unique code: ${this.studCode}, my name: ${this.studName}.`);  
    }  
    }  
      
    let student1: Student1 = new Student1(1, "JoeRoot");  
    console.log(student1.display());  

    console.log("Protected")
    class Student2 {  
        public studCode: number;  
        protected studName: string;  
        constructor(code1: number, name1: string){  
            this.studCode = code1;  
            this.studName = name1;  
            }  
    }  
    class Person extends Student2 {  
        private department: string;  
      
        constructor(code1: number, name1: string, department: string) {  
            super(code1, name1);  
            this.department = department;  
        }  
        public getElevatorPitch() {  
            return (`My unique code: ${this.studCode}, my name: ${this.studName} and I am in ${this.department} Branch.`);  
        }  
    }  
    let joeRoot: Person = new Person(1, "JoeRoot", "CS");  
    console.log(joeRoot.getElevatorPitch());  

    console.log("Readonly Modifier")
    class Company {  
        readonly country: string = "India";  
        readonly name: string;  
          
        constructor(contName: string) {  
        this.name = contName;  
        }  
        showDetails() {  
        console.log(this.name + " : " + this.country);  
        }  
       }  
          
       let comp = new Company("JavaTpoint");  
       comp.showDetails(); // JavaTpoint : India  

       console.log("%cAccessors","color: #007acc;")
       const fullNameMaxLength = 10;

        class Employee {
        private _fullName: string = "";

        get fullName1(): string {
            return this._fullName;
        }

        set fullName1(newName: string) {
            if (newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
            }

            this._fullName = newName;
        }
        }

        let employee1 = new Employee();
        employee1.fullName1 = "Bob Smith";

        if (employee1.fullName1) {
        console.log(employee1.fullName1);
}

console.log("Function")
console.log("Calling a Function")
function test() {   // function definition    
    console.log("function called") 
 } 
 test()              

 console.log("Returning a Function")
 //function defined 
function greet():string { //the function returns a string 
    return "Hello World" 
 } 
 
 function caller() { 
    var msg = greet() //function greet() invoked 
    console.log(msg) 
 } 
 
 //invoke function 
 caller()

 console.log("Anonymous function")
 var res1 = function(a:number,b:number) { 
    return a*b;  
 }; 
 console.log(res1(12,2)) 

 console.log("Parameterized a Function")
function test_param(n1:number,s1:string) { 
    console.log(n1) 
    console.log(s1) 
 } 
 test_param(123,"this is a string")
 
 console.log("Rest Parameters")
 function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("sum of the numbers",sum) 
 } 
 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)

 console.log("Function Constructor")
 var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);


console.log("Function Overloads")
function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 

function disp(x:any,y?:any):void { 
   console.log(x); 
   console.log(y); 
} 
disp("abc") 
disp(1,"xyz");


enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}

function getMedia(mediaName: string): PrintMedia {
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
 }

let mediaType: PrintMedia = getMedia('Forbes');
console.log("Enum as Return Type")
console.log(mediaType)

enum PrintMedia {
    Newspaper1 = 1,
    Newsletter5 = getPrintMediaCode('newsletter'),
    Magazine1 = Newsletter5 * 3,
    Book1 = 10
}

function getPrintMediaCode(mediaName: string): number {
    if (mediaName === 'newsletter') {
        return 5;
    }
}

console.log("Computed Enum")
console.log(PrintMedia.Newsletter5); // returns 5

console.log("String Enum")
enum Media {
    Newsp = "NEWSPAPER",
    Newsl = "NEWSLETTER",
    Magaz = "MAGAZINE",
    Boo = "BOOK"
}
// Access String Enum 
console.log(Media.Newsp); //returns NEWSPAPER

console.log("Reverse Mapping")
enum PMedia {
    Newspap = 1,
    Newsletr,
    Magazi,
    Bo
  }
  
 console.log(PMedia.Magazi);   // returns  3
 console.log(PMedia[3]);         // returns  Magazine
