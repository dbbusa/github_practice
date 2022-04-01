var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Animal2_name;
//Function
function add(x, y) {
    return x + y;
}
var result = add(22, 28);
//Anonymus Function 
console.log(result);
var myAdd = function (x, y) {
    return x + y;
};
result = myAdd(22, 12);
console.log(result);
//Optional  and Default Parameters
function fullname(fname, lname) {
    return "".concat(fname, " ").concat(lname);
}
//Its Generate Error
//let result1 = fullname("Bob")
//Its Work Properly
var result2 = fullname("Bob", "Admas");
console.log(result2);
//Now Use Optional Parameter
function myFullname(fname, lname) {
    return "".concat(fname, " ").concat(lname);
}
result2 = myFullname("Bob");
console.log(result2);
result2 = myFullname("Bob", "Admas");
console.log(result2);
//Now Use Default Parameter
function address(city, state) {
    if (state === void 0) { state = "Gujrat"; }
    return "".concat(city, " ").concat(state);
}
result2 = address("Rajkot");
console.log(result2);
result2 = address("Mumbai", "Maharashtra");
console.log(result2);
//Rest Paramete
function cities(fcity) {
    var restOfcity = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfcity[_i - 1] = arguments[_i];
    }
    return "".concat(fcity, " ").concat(restOfcity.join(' '));
}
result2 = cities("Rajkot");
console.log(result2);
result2 = cities("Rajkot", "Surat");
console.log(result2);
result2 = cities("Rajkot", "Surat", "Mumbai", "Ahmedabad", "Gandhinagar", "Pune");
console.log(result2);
//this and arrow fuunction
var deck = {
    suit: ['Heart', 'Speades', 'Clubs', 'Diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var picedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suit[picedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log(cardPicker());
console.log(pickedCard);
//Classes
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello ".concat(this.greeting);
    };
    return Greeter;
}());
var greeter = new Greeter("World");
console.log(greeter.greet());
//Inheritance
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved ".concat(distanceInMeters, "m."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof! woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.bark();
dog.move(10);
var Animals = /** @class */ (function () {
    function Animals(theName) {
        this.name = theName;
    }
    Animals.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("".concat(this.name, " ").concat(distanceInMeters, "m."));
    };
    return Animals;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animals));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animals));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
//Public, Private and Protected Modifiers
//1. public
var Animal1 = /** @class */ (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    Animal1.prototype.move = function (distanceInMeters) {
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m. "));
    };
    return Animal1;
}());
var dogs = new Animal1("Dog");
dogs.move(45);
//2. private
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        _Animal2_name.set(this, void 0);
        __classPrivateFieldSet(this, _Animal2_name, theName, "f");
    }
    return Animal2;
}());
_Animal2_name = new WeakMap();
var cat = new Animal2("Hello");
//cat.#name
//3. Protected
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is ".concat(this.name, " and I work in ").concat(this.department, " ");
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "sales");
//let John = new Person("John")  Error
console.log(howard.getElevatorPitch());
//console.log(howard.name)  Error
//4. ReadOnly
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 Strong legs");
//Error dad.name = "Man with the 3-piece suit"
//5. Parameter Properties
var Octopus1 = /** @class */ (function () {
    function Octopus1(name) {
        this.name = name;
        this.numberOfLegs = 8;
        console.log(name);
        name = "Hello";
        this.name = name;
    }
    return Octopus1;
}());
dad = new Octopus1("Man with the 8 Strong Legs");
dad.name;
//6. Accessors
//without get & set Method
var Employees = /** @class */ (function () {
    function Employees() {
    }
    return Employees;
}());
var emp = new Employees();
emp.fullname = "Bob Smith";
if (emp.fullname) {
    console.log(emp.fullname);
}
//set & get Method
var fulNameMaxLength = 10;
var Employees1 = /** @class */ (function () {
    function Employees1() {
    }
    return Employees1;
}());
