function getDate(){
  var date = new Date();

  var day = ("0" + date.getDate()).slice(-2);
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var today = date.getFullYear()+"-"+(month)+"-"+(day) ;
  document.getElementById("Date").value = today;
};
$(document).ready(function()){
    getDate();
};
