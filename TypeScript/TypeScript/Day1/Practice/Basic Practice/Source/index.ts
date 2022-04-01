let isDone: boolean = true;
console.log(isDone);

let decimal: number = 6;
console.log(decimal);

let hex: number = 0xf00d;
console.log(hex);

let binary: number = 0b1010;
console.log(binary);

let octal: number = 0o744;
console.log(octal);


let myNumber: number = 123456;

console.log(myNumber.toExponential());
console.log(myNumber.toExponential(1));

let myNumber1: number = 10.8788;

console.log(myNumber1.toFixed());
console.log(myNumber1.toFixed(1));

let myNumber2: number = 10667.987;

console.log(myNumber2.toLocaleString());
console.log(myNumber2.toLocaleString('de-DE'));

let myNumber3: number = 10.5679;

console.log(myNumber3.toPrecision(1)); 
console.log(myNumber3.toPrecision(2));

let myNumber4: number = 123;
console.log(myNumber4.toString()); 
console.log(myNumber4.toString(2));

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string =
  "Hello, my name is " +
  fullName +
  ".\n\n" +
  "I am " +
  age  +
  " years old.";
  console.log(sentence);

let str1: string = 'Hello TypeScript';
let str2: string = 'By..'
console.log(str1.charAt(0));
console.log(str1.charAt(2));

console.log(str1.concat(str2));

console.log(str1.indexOf('t'));

console.log(str2.replace('By..','Hello'));

let str3: string = 'BMW, Suzuki, Tata'
console.log(str3.split(','))

console.log(str1.toUpperCase());

console.log('HELLO'.toLowerCase());

let val:any = 'Hello';
console.log(val);

let fruits: string[] = ['Apple' , 'Orange', 'Banna'];

for(var i in fruits){
    console.log(fruits[i]);
}

var cars: Array<string> = ['Chevrolet','BMW','AMG','Suzuki','Tata'];

console.log(cars.sort());

console.log(cars.pop());


console.log(cars.push('Toyota'));

for(var index in cars){
    console.log(cars[index]);
}

console.log(cars.concat(['Ford','Merce']));

console.log(cars.indexOf('Toyota'));

console.log(cars.shift());
for(var ind in cars){
    console.log(cars[ind]);
}