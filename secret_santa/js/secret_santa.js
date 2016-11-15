//init variables
var dan = {
  name: "Daniel",
  available_matches: ["Tiffany", "Judy", "Kun"],
  match: ""
};
var jen = {
  name: "Jenny",
  available_matches: ["Tiffany", "Judy", "Kun"],
  match: ""
};
var tiff = {
  name: "Tiffany",
  available_matches: ["Jenny", "Daniel", "Judy", "Kun"],
  match: ""
};
var judy = {
  name: "Judy",
  available_matches: ["Tiffany", "Daniel", "Jenny"],
  match: ""
};
var kun = {
  name: "Kun",
  available_matches: ["Tiffany", "Daniel", "Jenny"],
  match: ""
};
var people = [dan, jen, tiff, judy, kun];
var isDuplicate;

init();

function init (){
  var tries = 0;
  do {
    generateMatches();
    checkForDuplicates();
    if (isDuplicate){
      isDuplicate = false;
    }
    tries++;
  } while (isDuplicate);
  
  document.getElementById("duplicates").innerHTML = (isDuplicate) ? "Yes":"No";
  document.getElementById("tries").innerHTML = tries;
};

function generateMatches(){
  for (i = 0; i < people.length; i++){
    var j = getRandomInt(0,people[i].available_matches.length-1);
    people[i].match = people[i].available_matches[j];
    document.getElementById("person"+i).innerHTML = people[i].name + ": matched with " + people[i].match;
  }
};

function checkForDuplicates(){
  for (j = 0; j < people.length; j++){
    for (k = j+1; k < people.length; k++){
      if (k != j && people[k].match == people[j].match){
        isDuplicate = true;
      }
    }
  }
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};