let playerCounter = 0;
let computerCounter = 0;
let drawCounter = 0;
let roundCounter = 0;
let inputErrorCounter = 0;

function game() {
  while (playerCounter < 3 && computerCounter < 3) {
    roundCounter += 1;
    console.log(playRound());
  }
  if (playerCounter == 3) {
    console.log("You are the f**k**g winner!!!!");
  } else {
    console.log("cb computer won...");
  }
  console.log("Computer Score is: " + computerCounter);
  console.log("Player Score is: " + playerCounter);
  console.log("No. of times there was a draw: " + drawCounter);
  console.log("No. of rounds played: " + (roundCounter - inputErrorCounter));
  console.log("No. of discarded rounds: " + inputErrorCounter);
  console.log(
    "Winner's effectiveness is: " +
      (3 / (roundCounter - inputErrorCounter)) * 100 +
      "%"
  );
}

function playRound() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  if (playerSelection == computerSelection) {
    drawCounter += 1;
    return "It's a bloody draw and a bloody waste of time...";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      computerCounter += 1;
      return `You lost to computer's ${computerSelection}`;
    } else {
      playerCounter += 1;
      return `You win the computer's ${computerSelection}!!`;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      computerCounter += 1;
      return `You lost to computer's ${computerSelection}`;
    } else {
      playerCounter += 1;
      return `You win the computer's ${computerSelection}!!`;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      computerCounter += 1;
      return `You lost to computer's ${computerSelection}`;
    } else {
      playerCounter += 1;
      return `You win the computer's ${computerSelection}!!`;
    }
  } else {
    inputErrorCounter += 1;
    return playerSelection;
    // return `extraordinary case of computer:${computerSelection} and player:${playerSelection} not handled yet`
  }
}

function getComputerChoice() {
  let elementLocation = Math.floor(Math.random() * 3);
  let choiceArray = ["rock", "paper", "scissors"];
  return choiceArray[elementLocation];
}

function getPlayerChoice() {
  let playerInput = prompt(
    "Is your choice rock, paper or scissors?"
  ).toLowerCase();
  if (["rock", "paper", "scissors"].includes(playerInput)) {
    return playerInput;
  } else {
    return "invalid input mf";
  }
}