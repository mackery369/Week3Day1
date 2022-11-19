var d = new Date(); //Get current date
var hr = d.getHours() - 10; //Get current hours
document.write(d + ' ' + hr);

if (hr <= 12){
   document.getElementById("lunch").style.display = "block";
 } 
 else if (hr <= 19 ){
    document.getElementById("dinner").style.display = "block";
 }
 else{
     document.write('<br><br> You are too late for dinner or lunch');
  }
