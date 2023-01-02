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




/**
 * Visualizing the flow i have in my head so i can correct it:
 * click ROCK on index.html -> eventlistener sends "rock" to getPlayerChoice()
 * -> so playRound() can use it
 *
 * in the flow above, if i initialize playRound() first, i havnt figured out how
 * to let the code wait for input from the user. previously there was a prompt
 * doing the job. but now if i run playRound() it returns "invalid input".
 * this the main reason i been stuck on this for so long
 *
 *
 **/

/**
 * syntax of addEventListener with a callback function with an argument:
 * element.addEventListener('click', (parameter) => myFunction(parameter));
 *
 * this seems to suggest that the parameter is taken from the element, will
 * investigate
 */

/**
 * now how do i modify the game() function to only run when i click any of the
 * buttons?
 * what if i dont use the loop.. and use and if condition that checks the
 * player counters!
 *
 * only if the counters are less than 5 then the playRound game logic will
 * execute?
 * OR
 * at the end of each result pattern, there has to be a check on the counters
 * so we would know if there is a winner. (this works)
 * maybe it can be written into another function that does this check so that
 * it can be called every time
 *
 */

/**
 *
 */
