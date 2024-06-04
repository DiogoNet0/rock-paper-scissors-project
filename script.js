/* let getComputerChoice = Math.floor(Math.random() * 3);
let computerString;

if (getComputerChoice === 0) {
  computerString = "Rock!";
} else if (getComputerChoice === 1) {
  computerString = "Paper!";
} else {
  computerString = "Scissors!";
}
alert(computerString);

 */

function getComputerChoice() {
  const choices = ["Rock!", "Paper!", "Scissors!"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
console.log(getComputerChoice());

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
console.log(humanChoice);
