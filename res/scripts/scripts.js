function displayNav(){
  var element = document.getElementById('projects');
  var projects = [//ADD NEW PAGES HERE ENTER ~ TO OVERRIDE HREF
    "Chancho's Unity Roundup 2k21 Remastered V~/cSharp/CUR2R5",
    "Shoot 'em Up Prototype~/cSharp/SHMUP",
    "Maze Generator~/cSharp/MazeGenerator",
    "Catan Proof Of Concept~/cSharp/Catan",
    "3:16 Metal~https://316metalworks.com",
    "Archive"
  ];
  var ol = document.createElement("OL");
  for(s of projects){
    var link = "/"+s+".html";
    var text = s;
    if(s.indexOf("~")!=-1){
      link = s.substring(s.indexOf("~")+1);
      text = s.substring(0,s.indexOf("~"));
    }
    var li = document.createElement("LI");
    var a = document.createElement("A");
    a.href = link;
    a.text = text;
    ol.appendChild(li);
    li.appendChild(a);
    element.appendChild(ol);
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
