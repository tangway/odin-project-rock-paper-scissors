function playRound(playerSelection, computerSelection) {
  // your code here!
}

function getComputerChoice() {
  let elementLocation =  Math.floor(Math.random() * 3)
  let choiceArray = ["rock", "paper", "scissors"]
  return choiceArray[elementLocation]
}

function getPlayerSelection() {
  let playerInput = prompt().toLowerCase()
  if (playerInput == "rock" || playerInput == "paper" || playerInput == "scissors") {
    return playerInput
  }
  else {
    return "check your input mf"
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();