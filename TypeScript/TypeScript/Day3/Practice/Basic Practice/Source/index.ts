// Unions and Intersection
function printId(id : number | string){
    console.log("Your Id is :" + id)
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    }else{

    }
}
printId(101)
printId("101se")
//printId(["Arazu",""]) Error


//Generic
function createPair<S,T>(v1: S , v2: T):[S,T]{
    return [v1, v2];
}
let x =  createPair("arazu","kaneriya")
console.log(x)
function identity<Type>(arg: Type): Type {
    return arg;
}
let num = identity<string>(`13`)
console.log(num)

//Generic Classes
class GenericNumber<NumType>{
    zeroValue : NumType;
    add : (x:NumType, y:NumType) => NumType
}
let myGenericNumber = new GenericNumber<string>();
myGenericNumber.zeroValue = `0`;
myGenericNumber.add = function(x,y){
    return x + y;
}
console.log(myGenericNumber.add("P","A"))

//Generic Constraints
function loggingIdentity<Type>(arg:Type):Type{
    //console.log(arg.length) Error Because Type has no constraints like length
    return arg;
}
interface LengthWise{
    length: number
}
function loggingIdentity1<Type extends LengthWise>(arg: Type) :Type{
    console.log(`${arg.length}`)
    return arg 
}
loggingIdentity1({length:10})

// Using Type Parameters in Generic Constraints
// function getProperty<Type, key extends keyof Type>(object : Type , key : Key){
//     return obj[key];
// }
// let y = {a:1,b:2,c:3,d:4};
// getProperty(x,"a"),
// getProperty(x,"m")

// Using Class Types in Generics
class Beekeeper{
    hasMask: boolean = true;
}
class ZooKeeper {
    nametage: string = "Mikle"
}
class Animal {
    numLegs: number = 4;
}
class Bee extends Animal{
    keeper: Beekeeper = new Beekeeper()
}
class Lion extends Animal{
    keeper: ZooKeeper = new ZooKeeper();
}
function createInstace<A extends Animal>(c : new () => A) : A{
    return new c();
}
let a =  createInstace(Lion).keeper.nametage;
console.log(a)
let b = createInstace(Bee).keeper.hasMask;
console.log(b)

