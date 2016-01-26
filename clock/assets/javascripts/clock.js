$(document).ready(function() {
  var clock = document.getElementById("clock-text");
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  clock.innerHTML = hours + ":" + minutes + ":" + seconds;
});