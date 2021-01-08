
function code(){
    var html = document.getElementById("html").value;
    var css = document.getElementById("css").value;
    var js = document.getElementById("javas").value;
    //bring it all together
    jss = "<scri"+"pt>"
    jse = "</scri"+"pt>"
    
var myWindow = window.open("", "", "width=max,height=max");
  myWindow.document.write(jss+js+jse+html+"<style>"+css+"</style>");
  // hook the code together
}
function eggg(){//stupid easter egg
    document.getElementById("head").innerHTML = "Easter Egg!"
}