let playerCounter = 0;
let computerCounter = 0;
let drawCounter = 0;
let roundCounter = 0;

const rock = document.querySelector("#rock");
rock.addEventListener("click", playRound);

const paper = document.querySelector("#paper");
paper.addEventListener("click", playRound);

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", playRound);

const result = document.querySelector(".result");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const drawScore = document.querySelector(".drawScore");
const summary = document.querySelector('.summary')
const effectiveness = document.querySelector('.effectiveness')


function playRound(e) {
  if (playerCounter === 5 || computerCounter === 5) {
    return;
  }

  const playerSelection = e.target.textContent;
  const computerSelection = getComputerChoice();
  roundCounter += 1

  if (playerSelection == computerSelection) {
    drawCounter += 1;
    result.textContent = "Current Round: Draw";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      computerCounter += 1;
      result.textContent = `Current Round: You lost to computer's ${computerSelection}`;
    } else {
      playerCounter += 1;
      result.textContent = `Current Round: You win the computer's ${computerSelection}!!`;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      computerCounter += 1;
      result.textContent = `You lost to computer's ${computerSelection}`;
    } else {
      playerCounter += 1;
      result.textContent = `You win the computer's ${computerSelection}!!`;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      computerCounter += 1;
      result.textContent = `You lost to computer's ${computerSelection}`;
    } else {
      playerCounter += 1;
      result.textContent = `You win the computer's ${computerSelection}!!`;
    }
  }

  scoreCheck();
}

function scoreCheck() {
  playerScore.textContent = `Player: ${playerCounter}`;
  computerScore.textContent = `Computer: ${computerCounter}`;
  drawScore.textContent = `Draws: ${drawCounter}`;

  if (playerCounter === 5) {
    result.textContent = "YOU ARE THE WINNER!!!!";
    effectiveness.innerHTML = "<br>" + `Winner's effectiveness is: ${((5/roundCounter) * 100).toFixed(1)}%`
  } else if (computerCounter === 5) {
    result.textContent = "the cb computer won...";
    effectiveness.innerHTML = "<br>" + `Winner's effectiveness is: ${((5/roundCounter) * 100).toFixed(1)}%`
  }

  summary.innerHTML = "<br>" + `No. of times there was a draw: ${drawCounter}` + 
  "<br>"+ `No. of rounds played: ${roundCounter}`
}

function getComputerChoice() {
  let elementIndex = Math.floor(Math.random() * 3);
  let choiceArray = ["rock", "paper", "scissors"];
  return choiceArray[elementIndex];
}
