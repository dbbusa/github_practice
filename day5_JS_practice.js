function area_circle(value){
    return 3.14*value*value ;
}
function practice1(){
    var x = prompt("Enter a Number")
    var result = area_circle(x);
    document.getElementById("answer1").innerHTML = "Area of circle for " + x + " radius is : "+result
}
function practice2(){
    var length = prompt("Enter length of Reactangle")
    var width = prompt("Enter Width of Reactangle")
    var myfunction = new Function('a', 'b', 'return a * b');
    document.getElementById("answer2").innerHTML =  "Area of Reactangle is : " + myfunction(length,width) ;
}
function practice3(){
    var value = prompt("Enter Value")
    var x = myFunction(value);
    document.getElementById("answer3").innerHTML = "Square of " + value + " Number is : " + x
    function myFunction(y) {
    return y * y;
    }
}
function practice4(){
    var name = prompt("Enter Employee name")
    var address = prompt("Enter Employee address")
    var designation = prompt("Enter Employee Designation")
    var employee = {
        "name" : name ,
        "address" : address,
        "designation" : designation
    };
    myfun(employee)
    function myfun(employees){
        document.getElementById("answer4").innerHTML = "Employee Name : " + employees.name + "<br>" + "Employee Address : " + employees.address + "<br>" + "Employee Designation : " + employees.designation
    }  
}
function practice5(){
    var member = {
        fullname : function(){
            return this.fname + " " + this.lname
        }
    }
    var employee1 = {
        "fname" : "Arazu",
        "lname" : "Kaneriya"
    }
    document.getElementById("answer5").innerHTML = member.fullname.apply(employee1)
}
function practice6(){
    let x = 0;
   
    function a(){
        x += 1 ; 
        document.getElementById("answer6A").innerHTML = "Without using Function closure " + x;
    }
    a();
    a();
    a();

    const add = (function () {
        let counter = 0;
        return function () {counter += 1; return counter}
      })();
      
      document.getElementById("answer6B").innerHTML = "With using Function closure " +  (add() + add() + add());   
}
