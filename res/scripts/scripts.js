function displayNav(){
  var element = document.getElementById('projects');

  //IMPORT LIBRARY.JSON
  //var request = new XMLHttpRequest();
  //request.open("GET","/res/scripts/library.json", false);
  //request.send(null);
  //var library = JSON.parse(request.responseText);
  var library = 
[
   {
    "title":"gdChess Trainer",
    "reference":"/classics/godot/gdChess/",
    "card":"/res/img/library/Chess.png",
    "platform" : ["html"],
    "navigation" : true
  },
   {
    "title":"Hotel Lazarus",
    "reference":"/classics/cSharp/HotelLazarus/",
    "card":"/res/img/library/Hotel.png",
    "platform" : ["html"],
    "navigation" : true
  },
   {
    "title":"Wordle",
    "reference":"/classics/cSharp/Wordle/",
    "card":"/res/img/library/Wordle.png",
    "platform" : ["html"],
    "navigation" : true
  },
   {"title":"Godot Test 3D",
    "reference":"/classics/godot/SquashTheCreeps/",
    "card":"/res/img/library/Godot3D.png",
    "platform" : ["html"],
    "navigation" : false
  },
   {"title":"Godot Test 2D",
    "reference":"/classics/godot/AvoidTheCreeps/",
    "card":"/res/img/library/Godot2D.png",
    "platform" : ["html"],
    "navigation" : false
  },
   {
    "title":"Un-Named Stock Market Battle Simulator",
    "reference":"/classics/cSharp/LD49/",
    "card":"/res/img/library/Stonk.png",
    "platform" : ["html"],
    "navigation" : false
  },
  {
    "title":"Ressetti's Game",
    "reference":"/classics/cSharp/Ressetti/",
    "card":"/res/img/library/Ressetti.png",
    "platform" : ["html"],
    "navigation" : false
  },
  {
    "title":"3:16 Metal Works",
    "reference":"https://316metalworks.com/",
    "card":"/res/img/library/316.png",
    "platform" : ["html"],
    "navigation" : false
  },
  {
    "title":"JS Calculator",
    "reference":"/classics/misc/Calculator.html",
    "card":"/res/img/library/Calc.png",
    "platform" : ["html"],
    "navigation" : true
  },
  {
    "title":"The Depths",
    "reference":"/classics/cSharp/Depths/",
    "card":"/res/img/library/Depths.png",
    "platform" : ["html"],
    "navigation" : false
  },
  {
    "title":"Dolphin Jump Demo",
    "reference":"/classics/cSharp/DolphinJump/",
    "card":"/res/img/library/Dolphin.png",
    "platform" : ["html"],
    "navigation" : false
  },
  {
    "title":"Sort Algorithm Visualizer",
    "reference":"/classics/cSharp/AlgoVisualizer/",
    "card":"/res/img/library/Sort.png",
    "platform" : ["html"],
    "navigation" : true
  },
  {
    "title":"Chancho's Unity Roundup 2k21",
    "reference":"/classics/cSharp/CUR2R5/",
    "card":"/res/img/library/Cur2.png",
    "platform" : ["html"],
    "navigation" : true
  },
  {
    "title":"Shoot 'em Up Prototype",
    "reference":"/classics/cSharp/SHMUP/",
    "card":"/res/img/library/Shmup.png",
    "platform" : ["html"],
    "navigation" : false
  },
  {
    "title":"Algorithmic Maze Generator",
    "reference":"/classics/cSharp/MazeGenerator/",
    "card":"/res/img/library/Maze.png",
    "platform" : ["html"],
    "navigation" : true
  },
  {
    "title":"Lazy River Racing",
    "reference":"/classics/cSharp/LD47/",
    "card":"/res/img/library/River.png",
    "platform" : ["html"],
    "navigation" : false
  },
  {
    "title":"IgKnight: Keeper of the Flame",
    "reference":"/classics/misc/LD46.html",
    "card":"/res/img/library/Knight.png",
    "platform" : ["java"],
    "navigation" : false
  },
  {
    "title":"Nought - My First Ludum Dare Game",
    "reference":"/classics/misc/LD45.html",
    "card":"/res/img/library/Nought.png",
    "platform" : ["java"],
    "navigation" : false
  },
  {
    "title":"Catan",
    "reference":"/classics/cSharp/Catan/",
    "card":"/res/img/library/Catan.png",
    "platform" : ["html","java"],
    "navigation" : false
  },
  {
    "title":"Alfonso's IceCream Shop",
    "reference":"/classics/misc/Alfonso.html",
    "card":"/res/img/library/Icecream.png",
    "platform" : ["java"],
    "navigation" : false
  },
  {
    "title":"Archives",
    "reference":"/classics/misc/index.html",
    "card":"/res/img/library/Archive.png",
    "platform" : ["html"],
    "navigation" : true
  }
];


  var ol = element;
  for(s of library){
    if(!s.navigation)continue;
    var link = s.reference;
    var text = s.title;
    var a = document.createElement("A");
    a.href = link;
    a.text = text;
    ol.appendChild(a);
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
