
function code(){
    var html = document.getElementById("html").value;
    var css = document.getElementById("css").value;
    var js = document.getElementById("javas").value;
    //weird bug where I cant put the script html whatever or it freaks out so this is my 12 year old soulution ¯\_(ツ)_/¯
    jss = "<scri"+"pt>"
    jse = "</scri"+"pt>"
    
var myWindow = window.open("", "", "width=max,height=max");
  myWindow.document.write(jss+js+jse+html+"<style>"+css+"</style>");
  // hook the code together
}
function eggg(){//stupid easter egg
    document.getElementById("head").innerHTML = "Easter Egg!"
}
