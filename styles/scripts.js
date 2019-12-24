function displayNav(){
  var element = document.getElementById('projects');
  if(element.style.display=="block")element.style.display="none";
  else element.style.display="block";
}
function submitSearch(){
  var searchString = document.getElementById('search-query');
  var searchString = searchString.value;
  console.log(searchString);
  window.open("https://duckduckgo.com/?q="+searchString, '_blank');
}
