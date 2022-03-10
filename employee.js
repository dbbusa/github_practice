function taskA(){
    var eid = (document.getElementById("eid").value);
    console.log(eid)
   
    var eid_formate = /(?=(\d+(?=[a-zA-Z])|[a-zA-Z]+(?=\d))).{5}/;
    if(eid.length == 0){
        document.getElementById("error").innerHTML = "Please Enter Employee Id!!"
    }
    else if(!eid.match(eid_formate)){
        document.getElementById("error").innerHTML = "Employee Id Should be Contain Digit and Character with at least 5 length"
    }
    else{
        document.getElementById("error").innerHTML = ""
    }

}

function taskB(){
    var ename = (document.getElementById("ename").value);
    console.log(ename);

    var ename_formate = /^[a-zA-Z]+$/g;

    if(ename.length == 0){
        document.getElementById("error1").innerHTML = "Please Enter Employee Name!!"
    }else if(!ename.match(ename_formate)){
        document.getElementById("error1").innerHTML = "Employee Name must be in Words!!"
    }else if(ename.length < 2 ){
        document.getElementById("error1").innerHTML = "Employee Name must be in 2 length!!"
    }
    else{
        document.getElementById("error1").innerHTML = ""
    }
}

function taskC(){
    var eage = (document.getElementById("eage").value);
    var eage_formate = /^\d+$/;
    console.log(eage);

    if(eage == ""){
        document.getElementById("error2").innerHTML = "Please Enter Employee Age"
    }else if(!eage.match(eage_formate)){
        document.getElementById("error2").innerHTML = "Employee Should be in Number Only!!"
    }else{
        document.getElementById("error2").innerHTML = ""
    }
}

function taskD(){
    var edesignation = document.getElementById("edesignation").value;
    console.log(edesignation);

    var edesignation_formate = /^[a-zA-Z]+$/g;

    if(edesignation.length == 0){
        document.getElementById("error3").innerHTML = "Please Enter Employee Designation"
    }else if(!edesignation.match(edesignation_formate)){
        document.getElementById("error3").innerHTML = "Please Enter Employee Designation in Only Character"
    }
    else{
        document.getElementById("error3").innerHTML = ""       
    }
}

function taskE(){
    var esalary = (document.getElementById("esalary").value).trim();
    console.log(esalary);

    var  esalary_formate = /^\d+$/;

    if(esalary == 0){
        document.getElementById("error4").innerHTML = "Please Enter Employee Salary!!"
    }else if(!esalary.match(esalary_formate)){
        document.getElementById("error4").innerHTML = "Please Enter Employee Salary in Only Numbers"
    }else{
        document.getElementById("error4").innerHTML = ""
    }
}

function taskF(){
    var ecity = document.getElementById("Selection").value;
    console.log(ecity);

    if(ecity == "noselect"){
        document.getElementById("error5").innerHTML = "Please Select City!!"
    }else{
        document.getElementById("error5").innerHTML = ""
    }
}

function taskG(){
    var  eemail = document.getElementById("eemail").value;
    console.log(eemail);
    var email_formate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(eemail.length == 0){
        document.getElementById("error6").innerHTML = "Please Enter Employee Email!!"
    }else if(!eemail.match(email_formate)){
        document.getElementById("error6").innerHTML = "Please Enter Valid Employee Email"
    }
    else{
        document.getElementById("error6").innerHTML = ""
    }
}

function taskI(){
    var econtact = document.getElementById("econtact").value;
    var econtact_formate = /^\d+$/

    if(econtact.length == 0){
        document.getElementById("error8").innerHTML = "Please Enter Employee Contact No"
    }else if(econtact.match(econtact_formate)){
        document.getElementById("error8").innerHTML = "Please Enter Valid Employee Contact No"
    }else{
        document.getElementById("error8").innerHTML = ""
    }
}

function taskJ(){
    var edate = document.getElementById("edate").value;
    var edate_formate = /^(\d{1,2})\-(\d{1,2})\-(\d{4})$/g;

    if(edate.length == 0){
        document.getElementById("error9").innerHTML = "Please Enter Employee Join Date"
    }else if(!edate.match(edate_formate)){
        document.getElementById("error9").innerHTML = "Please Enter Valid Date as per formate MM-DD-YYYY!!"
    }else{
        document.getElementById("error9").innerHTML = ""
    }
}

function task(){
    taskA();
    taskB();
    taskC();
    taskD();
    taskE();
    taskF();
    taskG();
    taskI();
    taskJ();
    
}
