function SidebarOpen() {
  document.getElementById("mySidebar").style.display = "block";
}

function SidebarClose() {
  document.getElementById("mySidebar").style.display = "none";
}

var screenWidth;
var screenHeight;

init();

function init()
{
	screenWidth = window.innerWidth;
	screenHeight = window.innerHeight; 
}


window.onmousemove = function( event ) {
  var mouseX = event.pageX/screenWidth;	
  var mouseY = event.pageY/screenHeight;	
  var mult = 20;
  document.getElementsByClassName("image")[0].style.transform = 'translateX('+(mouseX*mult)+'px) translateY('+(mouseY*mult)+'px)';	

}