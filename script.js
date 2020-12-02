// Write your code below:

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 9);
}
function compareGuesses(human, cGuess, secretNumber) {
  if (Math.abs(human - secretNumber) > Math.abs(cGuess - secretNumber))
    return false;
  else return true;
}
function updateScore(winner) {
  if (winner === "human") humanScore++;
  else if (winner === "computer") computerScore++;
}
function advanceRound() {
  currentRoundNumber++;
}
updateScore("human");
console.log(humanScore); // To confirm that this value increased by 1
updateScore("computer");
console.log(computerScore); // To confirm that this value increased by 1
