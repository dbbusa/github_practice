// function call
const person1 = {
    firstname : "Arazu",
    lastname : "Kaneriya",
    address : {
        city : "Rajkot",
        State : "Gujrat",
        Country : "India"
    }
}

const person2 = {
    firstname : "Shaheer",
    lastname : "Sheikh"
}

const person = {
    fullname : function(array1,array2){
        return `fullname : ${this.firstname} ${this.lastname} ${array1} ${array2}`
    }
}

var x = person.fullname.call(person1,"Thanks","Regards")
console.log(x)
x = person.fullname.call(person2,"Thanks","Regards")
console.log(x)

//function apply
const myaddress = {
   
    fulladdress : function(array1,array2){
        return `${this.address.city} ${this.address.State} ${this.address.Country} ${array1} ${array2}` 
    }
}
const add =  myaddress.fulladdress.apply(person1,["Thanks","Regards"])
console.log(add)

//function bind()
const employee = {
    fname : "jhon",
    lname : "Doe",
    fullnames : function(){
        return `${this.fname} ${this.lname}` 
    }
}
const member = {
    fname : "Hege",
    lname : "nilsen"
}

let fullnames1 = employee.fullnames.bind(member)
console.log(fullnames1())

//function clouser
function buildContor(i) { 
    var contor = i;
    var displayContor = (() => {
        console.log(contor++)
        contor++;
    });
    return displayContor; 
}

var myContor = buildContor(1);
myContor(); // 1
myContor(); // 2
myContor(); // 3

// new closure - new outer scope - new contor variable
var myOtherContor = buildContor(10);
myOtherContor(); // 10 
myOtherContor(); // 11

// myContor was not affected 
myContor(); // 4