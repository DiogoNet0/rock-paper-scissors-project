let playerScore = 0; // Keeps track of Player´ score
let computerScore = 0; // Keeps track of Computer´ score

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
} // Randomly generates a choice for the game

function getPlayerChoice() {
  const userInput = prompt(
    "Enter your choice (rock, paper, scissors): "
  ).toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Invalid choice! Please enter rock, paper, or scissors.");
    return getPlayerChoice();
  }
} // Gets an input from the player and checks if its valid or not

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();
console.log("You chose: ", playerChoice);
console.log("The Computer chose: ", computerChoice);

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a draw!";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerScore = +1;
    return "You Win! Rock beats Scissors!";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerScore = +1;
    return "You Win! Scissors beats Paper!";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerScore = +1;
    return "You Win! Paper beats Rock";
  } else {
    computerScore = +1;
    return "You Lost!";
  }
} //

const playResult = playRound(playerChoice, computerChoice);
alert(playResult);
console.log("Player - ", playerScore);
console.log("Computer - ", computerScore);

for (i = 0; i <= 5; i++) {}
