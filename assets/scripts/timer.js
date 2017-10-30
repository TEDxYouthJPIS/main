var countDownDate = new Date("Dec 01, 2017 08:00:00");

var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var months = Math.floor(distance/ (1000*60*60*24*30))
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('timer').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "

  if (distance<=0) {
    clearInterval(x)
    document.getElementById('timer').innerHTML = "It's here."
  }
}, 1000)
