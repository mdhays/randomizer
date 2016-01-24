var userNumber;
var chosenNumber;
var randomNumber;

function numberSelected() {
  chosenNumber = document.getElementById('numbers-in').value;
  console.log(chosenNumber);

  userNumber = document.getElementById('chose-a-number').innerHTML = "You're choosing between " +chosenNumber +
  " outcome(s).";
  
  return chosenNumber;
}


function getRandomNumber() {
  var finalNumber;
  randomNumber = Math.floor(Math.random()*chosenNumber);
  console.log(Math.floor(Math.random()*chosenNumber));

  finalNumber = document.getElementById('chose-a-number').innerHTML = "Fate has chosen " + randomNumber + "!"
}

