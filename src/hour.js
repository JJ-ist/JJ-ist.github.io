// Set the date we're counting down to
var countDownDate = new Date("Oct 7, 2001 00:05:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = now - countDownDate;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(distance / (1000 * 60 * 60));
  var minutes = Math.floor(distance / (1000 * 60));
  var seconds = Math.floor(distance / (1000));
    
  // Output the result in an element with id="demo"
  document.getElementById("year2").innerHTML = 20
  document.getElementById("month").innerHTML = 240
  document.getElementById("day").innerHTML = days
  document.getElementById("hour").innerHTML = hours.toLocaleString("en-US")
  document.getElementById("minute").innerHTML = minutes.toLocaleString("en-US")
  document.getElementById("second").innerHTML = seconds.toLocaleString("en-US")
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);