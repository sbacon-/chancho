function displayNav(){
  var element = document.getElementById('projects');
  var projects = [//ADD NEW PAGES HERE ENTER ~ TO OVERRIDE HREF
    "CUR2R5~/cSharp/CUR2R5",
    "SHMUP~/cSharp/SHMUP",
    "MazeGenerator~/cSharp/MazeGenerator",
    "Catan~/cSharp/Catan",
    "3:16 Metal~https://316metalworks.com",
    "Archive"
  ];
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
    li.appendChild(a);
    element.appendChild(li);
  }
  if(element.style.display=="block"){
    element.style.display="none";
    element.innerHTML = '';
  }
  else element.style.display="block";



      /*
      <li><a href="/Alfonso.html">Alfonso</a></li>
      <li><a href="/Catan.html">Catan</a></li>
      <li><a href="/Nought.html">LD45</a></li>
      <li><a href="/LD46.html">LD46</a></li>
      <li><a href="/BTC.html">BTC</a></li>
      <li><a href="/AutoClick.html">ClickBot</a></li>
      <li><a href="https://316metalworks.com">3:16</a></li>
      <li><a href="/imgdump/">Image Dump</a></li>
      */



}
function submitSearch(){
  var searchString = document.getElementById('search-query');
  var searchString = searchString.value;
  console.log(searchString);
  window.open("https://duckduckgo.com/?q="+searchString, '_blank');
}
