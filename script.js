let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  var cmptChoice = ["Rock", "Paper", "Scissors"];
  var randomNum = Math.floor(Math.random() * 3);
  return cmptChoice[randomNum];
}

const bodyBox = document.querySelector(".result-box");
const result = document.createElement("div");
result.classList.add("result");
const hScore = document.createElement("p");
hScore.classList.add("humanScore");
const cScore = document.createElement("p");
cScore.classList.add("computerScore");

function getHumanChoice() {
  const rockBtn = document.querySelector("#rockBtn");
  rockBtn.addEventListener("click", () => {
    console.log("Rock");
    playRound("Rock", getComputerChoice());
  });
  const paperBtn = document.querySelector("#paperBtn");
  paperBtn.addEventListener("click", () => {
    console.log("Paper");
    playRound("Paper", getComputerChoice());
  });
  const scissorsBtn = document.querySelector("#scissorsBtn");
  scissorsBtn.addEventListener("click", () => {
    console.log("Scissors");
    playRound("Scissors", getComputerChoice());
  });
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "Rock" && computerChoice == "Scissors") {
    humanScore += 1;
    result.textContent = "You Win! Rock beats Scissors";

    bodyBox.appendChild(result);
    console.log("You Win! Rock beats Scissors");
  } else if (humanChoice == "Paper" && computerChoice == "Rock") {
    humanScore += 1;
    result.textContent = "You Win! Paper beats Rock";

    console.log("You Win! Paper beats Rock");
  } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    humanScore += 1;
    result.textContent = "You Win! Scissors beats Paper";
    console.log("You Win! Scissors beats Paper");
  }

  if (computerChoice == "Rock" && humanChoice == "Scissors") {
    computerScore += 1;
    result.textContent = "You Lose! Scissors loses against Rock";
    console.log("You Lose! Scissors loses against Rock");
  } else if (computerChoice == "Paper" && humanChoice == "Rock") {
    computerScore += 1;
    result.textContent = "You Lose! Rock loses against Paper";
    console.log("You Lose! Rock loses against Paper");
  } else if (computerChoice == "Scissors" && humanChoice == "Paper") {
    computerScore += 1;
    result.textContent = "You Lose! Paper loses against Scissors";
    console.log("You Lose! Paper loses against Scissors");
  }

  if (humanChoice == computerChoice) {
    result.textContent = "Tie! You chose the same hand. Score is not changed";
    console.log("Tie! You chose the same hand. Score is not changed");
  }
  bodyBox.appendChild(result);

  hScore.textContent = "Your Score: " + humanScore;
  cScore.textContent = "Computer Score: " + computerScore;
  bodyBox.appendChild(hScore);
  bodyBox.appendChild(cScore);

  checkGameOver();
}

function checkGameOver() {
  if (humanScore >= 5) {
    alert("Congratulations, you won the game! :) ");
    resetGame();
  }

  if (computerScore >= 5) {
    alert("Too bad, you lost the game! :( ");
    resetGame();
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  result.textContent = "";
  bodyBox.removeChild(hScore);
  bodyBox.removeChild(cScore);
}

function playGame() {
  getHumanChoice();
}

playGame();
