function task1(){
  $("#my_para").parent().css({"border": "2px solid red"})
}
function task2(){
  $("#my_para1").parents().css({"color": "blue"})
}
function reset2(){
  $("#my_para1").parents().css({"color": "black"})
}
function task3(){
  $("#main-div2").children().css({"color": "red", "border": "2px solid red"});
}
function reset3(){
  $("#main-div2").children().css({"color": "black","border":"none"})
}
function task4(){
  $("#main-div3").find("*").css({"color": "red", "border": "2px solid red"});
}
function reset4(){
  $("#main-div3").find("*").css({"color": "black","border":"none"})
}
function task5(){
  $("#Siblings").siblings().css({"color":"blue"})
}
function reset5(){
  $("#Siblings").siblings().css({"color":"black"})
}
function task6(){
  $("#next").next().css({"color":"blue"})
}
function reset6(){
  $("#next").next().css({"color":"black"})
}
function task7(){
  $("#nextall").nextAll().css({"color":"blue"})
}
function reset7(){
  $("#nextall").nextAll().css({"color":"black"})
}
function task8(){
  $("#nextuntil").nextUntil("h2").css({"color":"blue"})
}
function reset8(){
  $("#nextuntil").nextUntil("h2").css({"color":"black"})
}
function task9(){
  $("#first").first("#first").css({"color":"blue"})
}
function reset9(){
  $("#first").first("#first").css({"color":"black"})
}
function task10(){
  $("p").last("#last").css({"color":"blue"})
}
function reset10(){
  $("p").last("#last").css({"color":"black"})
}
function task11(){
  $("p").eq(-1).css({"color":"blue"})
}
function reset11(){
  $("p").eq(-1).css({"color":"black"})
}
function task12(){
  $("p").filter(".intro").css("color", "blue");
}
function reset12(){
  $("p").filter(".intro").css("color", "black");
}
function task13(){
  $("p").not(".intro").css("color","blue");
}
function reset13(){
  $("p").not(".intro").css("color","black");
}