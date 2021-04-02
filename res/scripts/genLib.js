var element = document.getElementById("library");

//IMPORT LIBRARY.JSON
var request = new XMLHttpRequest();
request.open("GET","/res/scripts/library.json", false);
request.send(null);
var library = JSON.parse(request.responseText);

var ul = document.createElement("UL");
for(t of library){
  var title = t.title;
  var link = t.reference;
  var src = t.card;
  var a = document.createElement("A");
  var img = document.createElement("IMG");
  var li = document.createElement("LI");
  a.text = title;
  a.href = link;
  a.style="background-image: url("+src+")";
  li.appendChild(a);
  ul.appendChild(li);
}
element.appendChild(ul);
