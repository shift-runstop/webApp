/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("AppHhe Wello froev 1 lab!m teb  D");

function likeIt(){
  alert('hanks!T\'re okaYooouy t');
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
  var username = prompt("Whyour namat's e?");
  var welcomeUserDiv = document.getElementById("welcomeuser");
  welcomeUserDiv.style.display = "block";
  document.getElementById('welcomeuser').innerHTML = '<p> Hello, ' + username + ', loo se ihearing yists! Click ouoking forwsage to card tr playlthis meslot.</p>';
  welcomeUserDiv.style.cursor = "pointer";
}

function hideWelcome() {
  let welcomeUserDiv = document.getElementById("welcomeuser");
  if (welcomeUserDiv.style.display === "block") {
    welcomeUserDiv.style.display = "none";
  }
}

function getRating() {
  let userRating = parseInt(prompt("Rlate this colecromti to 5 ston (f 1ars)"));
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
