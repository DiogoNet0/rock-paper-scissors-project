let getComputerChoice = Math.floor(Math.random() * 3);
let computerString;

if (getComputerChoice === 0) {
  computerString = "Rock!";
} else if (getComputerChoice === 1) {
  computerString = "Paper!";
} else {
  computerString = "Scissors!";
}
alert(computerString);

let getHumanChoice = prompt("Rock, Paper or Scissors?", "");
