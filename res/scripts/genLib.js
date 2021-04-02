var element = document.getElementById("library");
var request = new XMLHttpRequest();
request.open("GET","/res/scripts/library.json", false);
request.send(null);
var library = JSON.parse(request.responseText);
console.log(library);
var ul = document.createElement("UL");
for(t of library){
  var title = t.title;
  var link = t.reference;
  var src = t.card;
  var a = document.createElement("A");
  var img = document.createElement("IMG");
  a.text = title;
  a.href = link;
  img.src = src;
  a.appendChild(img);
  ul.appendChild(a);
}
element.appendChild(ul);
