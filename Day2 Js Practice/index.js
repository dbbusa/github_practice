function task1(){
   var mystring1 = (prompt("Enter a String")).trim();
   while(mystring1.length === 0){
      mystring1 = prompt("Your String is Empty please, enter again!!");      
   }   
}

function task2(){
    var mystring2 = (prompt("Enter a String")).trim();
    while(mystring2.length === 0){
        mystring2 = prompt("Your String is Empty please, enter again!!");      
     }  
    var splitstring = mystring2.split("");
    alert("Split String in Array" + " " +splitstring);
}

function task3(){
    var mystring3 = (prompt("Enter a String")).trim();
    while(mystring3.length === 0){
        mystring3 = prompt("Your String is Empty please, enter again!!");      
    }
    var start_index = prompt("Enter First Index");
    var end_index = prompt("Enter Last Index");
    var new_string =  mystring3.slice(start_index,end_index)
    alert("Your New Extract String From your string "+ mystring3 +" "+ "is : " + " " +new_string);
}

function task4(){
    var now = new Date();
    var todaydate = now.toDateString();
    document.getElementById("dates").innerHTML = "Today is " + todaydate;
}
var my_array = new Array();
var temp_array = new Array();
function task5A(){
    var items = document.getElementById("items").value; 
    my_array.push(items);
    console.log(my_array);
    temp_array = my_array
    document.getElementById("show").innerHTML = temp_array.toString().replace(/,/g,"<br>");
    document.getElementById("items").value=""
}
function task5B(){
    my_array.pop();
    document.getElementById("show").innerHTML = temp_array.toString().replace(/,/g,"<br>");
}
function task5C(){
    my_array.shift();
    document.getElementById("show").innerHTML = temp_array.toString().replace(/,/g,"<br>");
}
function task5D(){
    var Uitems = document.getElementById("items").value;
    my_array.unshift(Uitems);
    document.getElementById("show").innerHTML = temp_array.toString().replace(/,/g,"<br>");
    document.getElementById("items").value=""
}