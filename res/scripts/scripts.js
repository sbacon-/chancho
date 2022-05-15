function displayNav(){
  var element = document.getElementById('projects');

  //IMPORT LIBRARY.JSON
  var request = new XMLHttpRequest();
  request.open("GET","/res/scripts/library.json", false);
  request.send(null);
  var library = JSON.parse(request.responseText);

  var ol = element;
  for(s of library){
    if(!s.navigation)continue;
    var link = s.reference;
    var text = s.title;
    var li = document.createElement("LI");
    var a = document.createElement("A");
    a.href = link;
    a.text = text;
    ol.appendChild(li);
    li.appendChild(a);
  }
  if(element.style.visibility=="visible"){
    element.style.visibility="hidden";
    element.innerHTML = '';
  }
  else element.style.visibility="visible";
}
function submitSearch(){
  var searchString = document.getElementById('search-query');
  var searchString = searchString.value;
  console.log(searchString);
  window.open("https://duckduckgo.com/?q="+searchString, '_blank');
}
