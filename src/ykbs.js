
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

document.getElementsByClassName("hand")[0].style.transform = 'translateX('+((Math.sqrt(mouseX**2+mouseY**2))*200+400)+'px)';	

}