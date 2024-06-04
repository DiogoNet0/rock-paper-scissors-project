let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
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
    return getHumanChoice();
  }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(humanChoice);
console.log(computerChoice);

function playRound(humanChoice, computerChoice) {}
