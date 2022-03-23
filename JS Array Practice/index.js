/********************
JavaScript Array 
*/


let colours = ["Red","Green","Blue"]
console.log(colours)
let shades = ["Orange","lightGreen","indigo","pink","purple"]
console.log(shades)

/*Concate()*/
let add = colours.concat(shades)
console.log(add)

/*copyWithin()*/
console.log(colours.copyWithin(1,2))
console.log(colours.copyWithin(2,0,3))

/*entries()*/
const c = colours.entries();
console.log(c);
for (let x of c){
    console.log(x)
    console.log(x[0])
}

/*every()*/
const ages = [12, 3, 39, 40];
const result = ages.every(checkAge);
console.log(result)
function checkAge(age) {
    return age > 18;
}

/*fill()*/
console.log(colours)
console.log(colours.fill("white"))
console.log(colours)
console.log(shades.fill("black",1,3))
console.log(shades.fill("black",1))

/*filter()*/
const new_age = ages.filter(checkall)
console.log(new_age)
function checkall(age){
    return age>18
}

/*find()*/
const find_first = ages.find(findone);
console.log(find_first)
function findone(age){
    return age > 18
}

const find_index = ages.findIndex(findone)
console.log(find_index)

/*forEach()*/
const fruits = ["apple","orange","cherry","pineapple","apple","grapes","apple"]
fruits.forEach(myfruit)
function myfruit(item,index){
    console.log(` ${index} ${item}`)
}

/*from()*/
const myname = "ARAZU KANERIYA"
console.log(Array.from(myname))

/*includes()*/
console.log(fruits.includes("apple"))
console.log(fruits.includes("cherry",2))

/*indexOf()*/
console.log(fruits.indexOf("apple"))
console.log(fruits.indexOf("apple",3))

/*isArray()*/
console.log(Array.isArray(fruits))
console.log(Array.isArray(myname))

/*join()*/
console.log(fruits.join(" "))

/*keys()*/
let keys = fruits.keys()
let temp = "";
for(let y of keys){
    temp += y + "\n"
}
console.log(temp)
keys = Object.keys(fruits)
console.log(temp)

/*lastIndexOf()*/
console.log(fruits.lastIndexOf("apple"))

/*Map()*/
const numbers = [4,9,16,25];
console.log(numbers.map(new_num))
function new_num(num){
    return num * 10
}

/*pop()*/
console.log(fruits)
fruits.pop()
console.log(fruits)

/*push()*/
console.log(fruits)
fruits.push("kiwi")
console.log(fruits)
fruits.push("Kiwi", "Lemon");
console.log(fruits)

/*reduce()*/
let digit = [175,50,25]
const result1 = digit.reduce(getsum);
console.log(result1)
function getsum(total,num){
    return total - num
}

/*reduceRight()*/
const result2 = digit.reduceRight(getsub)
console.log(result2)
function getsub(total,num)
{
    return total - num
}

/*reverse()*/
console.log(digit.reverse())

/*shift()*/
console.log(fruits)
console.log(fruits.shift())
console.log(fruits)

/*Slice()*/
console.log(fruits.slice(1,3))
console.log(fruits)
console.log(fruits.slice(-3,-1))

/*some()*/
const value = digit.some((age)=>{return age > 200 })
console.log(value)

/*sort()*/
console.log(fruits)
console.log(fruits.sort())

/*splice()*/
console.log(digit)
digit.splice(2,0,22,28)
console.log(digit)
digit.splice(1,2)
console.log(digit)

/*toString()*/
console.log(fruits.toString())

/*unshift()*/
console.log(fruits)
console.log(fruits.unshift("Chikko","watermelon"))
console.log(fruits)

/*valueOf()*/
console.log(fruits.valueOf())

/*constructor*/
console.log(fruits.constructor)

/*length*/
console.log(fruits.length)
fruits.length = 5
console.log(fruits)