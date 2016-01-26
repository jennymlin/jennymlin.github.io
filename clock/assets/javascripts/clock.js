function updateClock() {
  var clock = document.getElementById("clock-text");
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var time = hours + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
  clock.innerHTML = time;

  setTimeout(updateClock, 1000);
}

$(document).ready(function() {
  updateClock();
});
