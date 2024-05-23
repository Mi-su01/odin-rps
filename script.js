function getComputerChoice() {
  var cmptChoice = ["Rock", "Paper", "Scissors"];
  var randomNum = Math.floor(Math.random() * 3);
  return cmptChoice[randomNum];
}

function getHumanChoice(input) {
  let inputLowerCase = input.toLowerCase();
  if (inputLowerCase == "rock") {
    return "Rock";
  } else if (inputLowerCase == "paper") {
    return "Paper";
  } else if (inputLowerCase == "scissors") {
    return "Scissors";
  } else {
    return "invalid choice";
  }
}
