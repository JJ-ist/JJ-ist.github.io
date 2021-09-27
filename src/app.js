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
  var mult2 = 10;
  document.getElementsByClassName("image")[0].style.transform = 'translateX('+(-mouseX*mult)+'px) translateY('+(-mouseY*mult)+'px)';	
  document.getElementsByClassName("cloud")[0].style.transform = 'translateX('+(mouseX*mult2)+'px) translateY('+(mouseY*mult2)+'px)';	
  document.getElementsByClassName("cloud")[1].style.transform = 'translateX('+(mouseX*mult2)+'px) translateY('+(mouseY*mult2)+'px)';	
  const clouds = document.getElementsByClassName("cloud");
  [...clouds].forEach(item => {
    item.style.transform = 'translateX('+(mouseX*mult2)+'px) translateY('+(mouseY*mult2)+'px)'
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.flex-container');
    if (square !== null){
    if (entry.isIntersecting) {
      square.classList.add('onscreen');
	  return;
    }
  }
  });
});

const containers = document.querySelectorAll('.container');
[...containers].forEach(item => {
  observer.observe(item)
});