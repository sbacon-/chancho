var element = document.getElementById("library");
  var projects = [//ADD NEW PAGES HERE ENTER ~ TO OVERRIDE HREF
    "CUR2R5~/cSharp/CUR2R5^Cur2",
    "SHMUP~/cSharp/SHMUP^Shmup",
    "MazeGen~/cSharp/MazeGenerator^Maze",
    "Catan~/cSharp/Catan^Catan",
    "Lazy River Racing~cSharp/LD47^River",
    "Igknight~LD46.html^Knight",
    "Nought~LD45.html^Nought",
    "Alfonso's IceCream Shop~Alfonso.html^Alf"
  ];
  for(s of projects){
    var text = s.substring(0,s.indexOf("~"));
    var link = s.substring(s.indexOf("~")+1,s.indexOf("^"));
    var src = "res/img/library/"+s.substring(s.indexOf("^")+1)+".png";
    console.log(src);
    var img = document.createElement("IMG");
    var a = document.createElement("A");
    img.src=src
    a.href = link;
    a.text = text;
    a.appendChild(img);
    element.appendChild(a);
  }
