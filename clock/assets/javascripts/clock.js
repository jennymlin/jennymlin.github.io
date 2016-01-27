function updateClock() {
  var clock = document.getElementById("clock");
  var background = document.getElementById("background");
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var time = [("0" + hours).slice(-2), ("0" + minutes).slice(-2), ("0" + seconds).slice(-2)];

  var color = "#" + time.join("");

  clock.innerHTML = color;
  background.style.backgroundColor = color;

  setTimeout(updateClock, 1000);
}

$(document).ready(function() {
  updateClock();
});
