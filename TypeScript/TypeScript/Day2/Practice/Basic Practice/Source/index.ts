//Function
function add(x: number, y: number): number {
    return x + y;
  }
var result : number =  add(22,28)   

//Anonymus Function 
console.log(result)
let myAdd = function (x: number, y: number): number {
    return x + y;
};
result = myAdd(22,12)
console.log(result)

//Optional  and Default Parameters
function fullname(fname : string , lname : string) : string{
    return `${fname} ${lname}`
}
//Its Generate Error
//let result1 = fullname("Bob")

//Its Work Properly
let result2 = fullname("Bob" , "Admas")
console.log(result2)

//Now Use Optional Parameter
function myFullname(fname : string , lname ? : string) :string{
    return `${fname} ${lname}`
}
result2 = myFullname("Bob")
console.log(result2)
result2 = myFullname("Bob","Admas")
console.log(result2)

//Now Use Default Parameter
function address(city : string , state = "Gujrat") : string{
    return `${city} ${state}`
}
result2 = address("Rajkot")
console.log(result2)
result2 = address("Mumbai","Maharashtra")
console.log(result2)

//Rest Paramete
function cities(fcity : string, ...restOfcity : string[]) : any {
    return `${fcity} ${restOfcity.join(' ')}`
}
result2 = cities("Rajkot")
console.log(result2)
result2 = cities("Rajkot" , "Surat")
console.log(result2)
result2 = cities("Rajkot","Surat","Mumbai","Ahmedabad","Gandhinagar","Pune")
console.log(result2)

//this and arrow fuunction
let deck = {
    suit : ['Heart','Speades','Clubs','Diamonds'],
    cards : Array(52),
    createCardPicker : function(){
        return() => {
            let pickedCard = Math.floor(Math.random() * 52);           
            let picedSuit = Math.floor(pickedCard/13);        
            return { suit : this.suit[picedSuit],card : pickedCard % 13 }
        }
    }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log(cardPicker())
console.log(pickedCard)

//Classes
class Greeter {
    greeting : string;

    constructor(message : string){
        this.greeting = message;
    }

    greet(){
        return `Hello ${this.greeting}`
    }
}
let greeter = new Greeter("World")
console.log(greeter.greet())

//Inheritance
class Animal {
    move(distanceInMeters: number = 0){
        console.log(`Animal moved ${distanceInMeters}m.`)
    }
}
class Dog extends Animal{
    bark(){
        console.log(`Woof! woof!`)
    }
}
const dog = new Dog();
dog.bark()
dog.move(10)

class Animals {
    name : string;
    constructor(theName : string){
        this.name = theName
    }
    move(distanceInMeters: number = 0){
        console.log(`${this.name} ${distanceInMeters}m.`)
    }
}
class Snake extends Animals{
    constructor(name : string){
        super(name)
    }
    move(distanceInMeters = 5): void {
        console.log(`Slithering...`)
        super.move(distanceInMeters)
    }
}
class Horse extends Animals{
    constructor(name : string){
        super(name)
    }
    move(distanceInMeters = 45): void {
        console.log(`Slithering...`)
        super.move(distanceInMeters)
    }
}
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
 
sam.move();
tom.move(34);

//Public, Private and Protected Modifiers
//1. public
class Animal1{
    public name: string
    public constructor(theName : string){
        this.name = theName
    }
    public move(distanceInMeters: number){
        console.log(`${this.name} moved ${distanceInMeters}m. `)
    }
} 
let dogs = new Animal1("Dog")
dogs.move(45)

//2. private
class Animal2{
    #name: string;
    constructor(theName:string){
        this.#name = theName;
    }
}
let cat = new Animal2("Hello")
//cat.#name

//3. Protected
class Person{
    protected name : string;
    protected constructor(name : string){
        this.name = name
    }
}
class Employee extends Person{
    private department : string;
    constructor(name : string,department:string){
        super(name);
        this.department = department
    }

    public getElevatorPitch(){
        return `Hello, my name is ${this.name} and I work in ${this.department} `
    }
}
let howard = new Employee("Howard","sales");
//let John = new Person("John")  Error
console.log(howard.getElevatorPitch())
//console.log(howard.name)  Error

//4. ReadOnly
class Octopus{
    readonly name : string;
    readonly numberOfLegs: number = 8;

    constructor(theName :string){
        this.name = theName
    }
}
let dad = new Octopus("Man with the 8 Strong legs");
//Error dad.name = "Man with the 3-piece suit"

//5. Parameter Properties
class Octopus1{
    readonly numberOfLegs: number = 8;
    constructor(readonly name:string){
        console.log(name)
        name = "Hello"
        this.name = name
    }
}
dad = new Octopus1("Man with the 8 Strong Legs")
dad.name;

//6. Accessors
//without get & set Method
class Employees{
    fullname: string;
}
let emp = new Employees();
emp.fullname = "Bob Smith";
if(emp.fullname){
    console.log(emp.fullname)
} 

//set & get Method
const fulNameMaxLength = 10
class Employees1{
    
}   