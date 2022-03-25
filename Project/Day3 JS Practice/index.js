//Callback function :
 function display(value){
    console.log(value.data)
 }
 function fetchs(mycallback){
    fetch("https://reqres.in/api/user").then(response => response.json()).then(data => mycallback(data));
    
}
fetchs(display);


//Async & await
async function data_api(){
    var data = await fetch("https://gorest.co.in/public/v2/users") 
    var x = await data.json();
    console.log(x);
} 
data_api()

//promise
function myoutput(some){
    console.log(some)
}
var myapidata = ''
let myPromise = new Promise(function(myResolve,myReject){
     fetch("https://gorest.co.in/public/v2/todos")
    .then(response =>{ 
           return  response.json()
    }).then((text)=>{
        myResolve(text)
    })
    .catch((error)=>{
        myReject("Something is Wrong ",error)
    })
})
myPromise.then(
    function(value){myoutput(value)}, function(error){myoutput(error)}
);

//API Geolocation
function showlocation(position){
    console.log(position.coords.latitude + "\n" + position.coords.longitude)
}
function getlocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showlocation)
    }else{
        console.log("Geolocation is not supported by this browser")
    }
}
getlocation()