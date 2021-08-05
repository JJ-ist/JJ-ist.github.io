function lightMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

//Rotates the parent circle on the x and y axis based on x y position of the mouse

var screenWidth;
var screenHeight;

init();

function init()
{
	screenWidth = window.innerWidth;
	screenHeight = window.innerHeight; 
}

var maxDegrees = 60;

window.onmousemove = function( event ) {
  var mouseX = event.pageX/screenWidth;	
	var mouseY = event.pageY/screenHeight;
	var yDegrees = (mouseX*maxDegrees)-0.4*maxDegrees;
	var xDegrees = -0.4*((mouseY*maxDegrees)-0.4*maxDegrees);	

  document.getElementsByClassName("love")[0].style.transform = 'rotateY('+yDegrees+'deg) rotateX('+xDegrees+'deg)';	

}