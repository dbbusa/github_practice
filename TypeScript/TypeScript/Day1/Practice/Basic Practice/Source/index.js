var isDone = true;
console.log(isDone);
var decimal = 6;
console.log(decimal);
var hex = 0xf00d;
console.log(hex);
var binary = 10;
console.log(binary);
var octal = 484;
console.log(octal);
var myNumber = 123456;
console.log(myNumber.toExponential());
console.log(myNumber.toExponential(1));
var myNumber1 = 10.8788;
console.log(myNumber1.toFixed());
console.log(myNumber1.toFixed(1));
var myNumber2 = 10667.987;
console.log(myNumber2.toLocaleString());
console.log(myNumber2.toLocaleString('de-DE'));
var myNumber3 = 10.5679;
console.log(myNumber3.toPrecision(1));
console.log(myNumber3.toPrecision(2));
var myNumber4 = 123;
console.log(myNumber4.toString());
console.log(myNumber4.toString(2));
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " +
    fullName +
    ".\n\n" +
    "I am " +
    age +
    " years old.";
console.log(sentence);
var str1 = 'Hello TypeScript';
var str2 = 'By..';
console.log(str1.charAt(0));
console.log(str1.charAt(2));
console.log(str1.concat(str2));
console.log(str1.indexOf('t'));
console.log(str2.replace('By..', 'Hello'));
var str3 = 'BMW, Suzuki, Tata';
console.log(str3.split(','));
console.log(str1.toUpperCase());
console.log('HELLO'.toLowerCase());
var val = 'Hello';
console.log(val);
var fruits = ['Apple', 'Orange', 'Banna'];
for (var i in fruits) {
    console.log(fruits[i]);
}
var cars = ['Chevrolet', 'BMW', 'AMG', 'Suzuki', 'Tata'];
console.log(cars.sort());
console.log(cars.pop());
console.log(cars.push('Toyota'));
for (var index in cars) {
    console.log(cars[index]);
}
console.log(cars.concat(['Ford', 'Merce']));
console.log(cars.indexOf('Toyota'));
console.log(cars.shift());
for (var ind in cars) {
    console.log(cars[ind]);
}
