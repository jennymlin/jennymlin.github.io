//init variables
var dan = {
  name: "Daniel",
  available_matches: [tiff, judy, kun],
  match: {}
};
var jen = {
  name: "Jenny",
  available_matches: [tiff, judy, kun],
  match: {}
};
var tiff = {
  name: "Tiffany",
  available_matches: [jen, dan, judy, kun],
  match: {}
};
var judy = {
  name: "Judy",
  match: {}
};
var kun = {
  name: "Kun",
  available_matches: {},
  match: {}
};

judy.available_matches = [tiff, dan, jen];
kun.available_matches = [tiff, dan, jen];
tiff.available_matches = [jen, dan, judy, kun];
jen.available_matches = [tiff, judy, kun];
dan.available_matches = [tiff, judy, kun];

var people = [dan, jen, tiff, judy, kun];
var tries = 0;
var hashvalue;

init();
display();
showDebug();

function init() {
  Math.seedrandom('water')
  do {
    tries++;
    generateMatches();
  } while (hasDuplicates());
};

function display() {
  hashvalue = window.location.hash.substr(1);
  for (i = 0; i < people.length; i++) {
    if (hashvalue.toLowerCase() == people[i].name.toLowerCase()) {
      document.getElementById("intro").innerHTML = "Hello, " + people[i].name + "! Your match is " + people[i].match.name + ".";
    }
  }
};

function showDebug() {
  document.getElementById("debugging").style.visibility = "visible";
  document.getElementById("hash-value").innerHTML = hashvalue;

  for (i = 0; i < people.length; i++) {
    document.getElementById("person" + i).innerHTML = people[i].name + ": matched with " + people[i].match.name;
  }
  document.getElementById("duplicates").innerHTML = (hasDuplicates()) ? "Yes" : "No";
  document.getElementById("tries").innerHTML = tries;
};

function generateMatches() {
  for (i = 0; i < people.length; i++) {
    var j = getRandomInt(0, people[i].available_matches.length - 1);
    people[i].match = people[i].available_matches[j];
    console.log("Tried to match " + people[i].name + " to " + people[i].available_matches[j].name);
  }
};

function hasDuplicates() {
  for (j = 0; j < people.length; j++) {
    for (k = j + 1; k < people.length; k++) {
      if (k != j && people[k].match == people[j].match) {
        return true;
      }
    }
  }
  return false;
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
