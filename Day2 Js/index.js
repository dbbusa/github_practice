function task1(){
    var dates = document.getElementById("mydate").value;
    console.log(typeof(dates));
    var numbers = /^[0-9-+()]*$/ ;
    if(!dates.match(numbers)){
       document.getElementById("error").innerHTML = "*Date Must be in Digit Only"
    }
    else{
        document.getElementById("error").innerHTML = ""
        var mystring = String(document.getElementById("mydate").value);
        console.log(mystring);
    
        var splitdates = mystring.split("-");
        console.log(splitdates);
     
        var month = splitdates[0];
        var date  = splitdates[1];
        var year  = splitdates[2];
    
        var temp_year = Number(year);
         var flag = Boolean((temp_year % 100 === 0) ? (temp_year % 400 === 0) : (temp_year % 4 === 0));
        if(month > 12 ){
            document.getElementById("error").innerHTML = "*Month should be in 1 to 12"
        }
        if((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && date > 31  ){
            document.getElementById("error").innerHTML = "Date Should be in 31"
        }else if (month == 4 || month == 6 || month == 9 || month == 11  && date > 31){
            document.getElementById("error").innerHTML = "Date Should be in 30"
        }else if( flag === true && date > 29 && month == 2){
            document.getElementById("error").innerHTML = "Date should be in 29"
        }else if(flag === false && date >28 && month == 2){
            document.getElementById("error").innerHTML = "Date should be in 28"
        }
    }
}