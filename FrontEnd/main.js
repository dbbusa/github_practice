
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    id = "module_content" + i;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var coll = document.getElementsByClassName("collapsible1");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function ShowModule(IdBaseName) {
  var coll = document.getElementsByClassName("course");
  for (x = 1; x <= coll.length; x++) {
    id1 = "show" + x;
    id2 = "show_content" + x;
    if (IdBaseName == x) {
      document.getElementById(id1).style.display = "block";
      document.getElementById(id2).style.display = "block";
    }
    else {
      document.getElementById(id1).style.display = "none";
      document.getElementById(id2).style.display = "none";
    }
  }
}