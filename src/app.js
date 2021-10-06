var screenWidth;
var screenHeight;
// const multi = Array.from({length: 10}, () => Math.floor(Math.random() * 50));

init();

function init()
{
	screenWidth = window.innerWidth;
	screenHeight = window.innerHeight;
}

function next()
{
  document.getElementsByClassName("load")[0].classList.add('move');
}

function random(){
  const wishes = ["always be happy!","achieve all your dreams!","always loved!","always healthy!","the best of luck for everything!","will be your best💘","always supported","stay beautiful always","get your dream job","anything you wish come true!"];
  document.getElementById("wish").innerHTML = wishes[Math.floor(Math.random() * wishes.length)]
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


var pos = -1;
function storyNext(move){
  const title = ["How are you?","Its been an adventure","You see...","I have not been long","But I am sure","Is the best time I've ever had","So.. Now you are","WOW! Time flies!","The one thing I can say is..","Happy 20th Birthday!"];
  const subtitle = ["Baik kan?","isn't it?","","in your life","every minutes I spend with you","","Twenty right?","Last time I know you are still a little gurl","","Azka Muthia Hidayat💗"];
  pos = (pos+move+title.length)%title.length;
  document.getElementById("bdtitle").innerHTML = title[pos];
  document.getElementById("bdsubtitle").innerHTML = subtitle[pos];

  if (pos==title.length-1){
    document.getElementById("bdimage").style.display = "block";
    document.getElementById("hidden").style.display = "block";
    document.getElementById("nextbutton").innerHTML = "Ulang";
  } else {
    document.getElementById("bdimage").style.display = "none";
    document.getElementById("hidden").style.display = "none";
    document.getElementById("nextbutton").innerHTML = "Next";
  }
}

var a = 0
title = "Secret Gift #3  Secret Gift #3  ";
function titleloop(){
  title = title.substr(1) + title.substr(0, 1);
  document.title = title;
}
var x = setInterval(titleloop,200);