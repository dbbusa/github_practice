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
// Unions and Intersection
function printId(id) {
    console.log("Your Id is :" + id);
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
    }
}
printId(101);
printId("101se");
//printId(["Arazu",""]) Error
//Generic
function createPair(v1, v2) {
    return [v1, v2];
}
var x = createPair("arazu", "kaneriya");
console.log(x);
function identity(arg) {
    return arg;
}
var num = identity("13");
console.log(num);
//Generic Classes
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = "0";
myGenericNumber.add = function (x, y) {
    return x + y;
};
console.log(myGenericNumber.add("P", "A"));
//Generic Constraints
function loggingIdentity(arg) {
    //console.log(arg.length) Error Because Type has no constraints like length
    return arg;
}
function loggingIdentity1(arg) {
    console.log("".concat(arg.length));
    return arg;
}
loggingIdentity1({ length: 10 });
// Using Type Parameters in Generic Constraints
// function getProperty<Type, key extends keyof Type>(object : Type , key : Key){
//     return obj[key];
// }
// let y = {a:1,b:2,c:3,d:4};
// getProperty(x,"a"),
// getProperty(x,"m")
// Using Class Types in Generics
var Beekeeper = /** @class */ (function () {
    function Beekeeper() {
        this.hasMask = true;
    }
    return Beekeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
        this.nametage = "Mikle";
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.numLegs = 4;
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keeper = new Beekeeper();
        return _this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keeper = new ZooKeeper();
        return _this;
    }
    return Lion;
}(Animal));
function createInstace(c) {
    return new c();
}
var a = createInstace(Lion).keeper.nametage;
console.log(a);
var b = createInstace(Bee).keeper.hasMask;
console.log(b);
