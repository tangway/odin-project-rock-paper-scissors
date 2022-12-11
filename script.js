function playRound() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  if (playerSelection == computerSelection) {
    return "It's a bloody draw and a bloody waste of time..."
  }
  else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return `You lost to computer's ${computerSelection}`
    } 
    else {
      return `You win the computer's ${computerSelection}!!`
    }
  }
  else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      return `You lost to computer's ${computerSelection}`
    } 
    else {
      return `You win the computer's ${computerSelection}!!`
    }
  }
  else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return `You lost to computer's ${computerSelection}`
    } 
    else {
      return `You win the computer's ${computerSelection}!!`
    }
  }
  else {
    return `extraordinary case of computer:${computerSelection} and player:${playerSelection} not handled yet`
  }
}

function getComputerChoice() {
  let elementLocation =  Math.floor(Math.random() * 3)
  let choiceArray = ["rock", "paper", "scissors"]
  return choiceArray[elementLocation]
}

function getPlayerChoice() {
  let playerInput = prompt("Is your choice rock, paper or scissors?").toLowerCase()
  if (["rock", "paper", "scissors"].includes(playerInput)) {
    return playerInput
  }
  else {
    return "check your input mf"
  }
}

function game() {
  
}