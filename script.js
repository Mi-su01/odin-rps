function getComputerChoice() {
  var cmptChoice = ["Rock", "Paper", "Scissors"];
  var randomNum = Math.floor(Math.random() * 3);
  return cmptChoice[randomNum];
}

function getHumanChoice() {
  let input = prompt("Choose Rock Paper or Scissors!").toLowerCase();
  if (input == "rock") {
    return "Rock";
  } else if (input == "paper") {
    return "Paper";
  } else if (input == "scissors") {
    return "Scissors";
  } else {
    console.log("Invalid Choice, Try Again");
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Scissors") {
      humanScore += 1;
      console.log("You Win! Rock beats Scissors");
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
      humanScore += 1;
      console.log("You Win! Paper beats Rock");
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
      humanScore += 1;
      console.log("You Win! Scissors beats Paper");
    }

    if (computerChoice == "Rock" && humanChoice == "Scissors") {
      computerScore += 1;
      console.log("You Lose! Scissors loses against Rock");
    } else if (computerChoice == "Paper" && humanChoice == "Rock") {
      computerScore += 1;
      console.log("You Lose! Rock loses against Paper");
    } else if (computerChoice == "Scissors" && humanChoice == "Paper") {
      computerScore += 1;
      console.log("You Lose! Paper loses against Scissors");
    }

    if (humanChoice == computerChoice) {
      console.log("Tie! You chose the same hand. Score is not changed");
    }
  }

  while (roundsPlayed < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    roundsPlayed++;
    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);
    console.log("Rounds Played: ", roundsPlayed);
  }
}

playGame();
