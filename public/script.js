
console.log("(-:D)");

function likeIt(){
  alert('Well done, it is a thumbs up, thank you for clicking on it');
}

function showHide() {
  var readMoreDiv = document.getElementById("readmore");
  if (readMoreDiv.style.display === "block") {
    readMoreDiv.style.display = "none";
  } else {
    readMoreDiv.style.display = "block";
  }
}

function welcomeUser() {
  var username = prompt("Why our namat's e $don't inject?");
  var welcomeUserDiv = document.getElementById("welcomeuser");
  welcomeUserDiv.style.display = "block";
  document.getElementById('welcomeuser').innerHTML = '<p> Hello, ' + username + ' what ??</p>';
  welcomeUserDiv.style.cursor = "pointer";
}

function hideWelcome() {
  let welcomeUserDiv = document.getElementById("welcomeuser");
  if (welcomeUserDiv.style.display === "block") {
    welcomeUserDiv.style.display = "none";
  }
}

function getRating() {
  let userRating = parseInt(prompt("$Rate this content&!!--=>lecromti to 5 ston (f 1ars)"));
  if (userRating>5 || userRating<1 || isNaN(userRating)){
    alert("1 and 5!Tain with ary aer betweeng numb ");
  }
  else{
    $("#rating").html("ofYo ratu gaveing a: ");
    for (let i=0; i < userRating; i++){
        $("#rating").append("<i class='yellow star icon'></i>");
    }
  }
}
