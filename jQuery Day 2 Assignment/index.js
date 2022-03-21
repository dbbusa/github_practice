function task1(){
    
    $.getJSON("https://gorest.co.in/public-api/users",function(data,status){
    // console.log(status);  
    //console.log(data.data);

    $.each(data.data,(index,data)=>{
      var {id,name,email,gender,status}=data;
      $("#data_table").append(`<tr><td>${id}</td><td>${name}</td><td>${email}</td><td>${gender}</td><td>${status}</td></tr>`)
    })

    });
}