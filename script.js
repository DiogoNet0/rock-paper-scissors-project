function playGame() {
  // Variables that keep track of the scores
  let playerScore = 0;
  let computerScore = 0;

  // Randomly generates a choice for the game
  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  // Gets an input from the player and checks if its valid or not
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
  }

  // converts the functions to variables

  function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a draw!";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
      playerScore++;
      return "You Win! Rock beats Scissors!";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      playerScore++;
      return "You Win! Scissors beats Paper!";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      playerScore++;
      return "You Win! Paper beats Rock";
    } else {
      computerScore++;
      return "You Lost!";
    }
  }

  // Play 5 rounds
  for (i = 0; i < 5; i++) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    alert(result);
    console.log(`Round ${i + 1}: ${result}`);
  }

  // Declare the winner
  console.log("Player Score:", playerScore);
  console.log("Computer Score:", computerScore);
  if (playerScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (playerScore < computerScore) {
    console.log("Sorry! The computer won the game!");
  } else {
    console.log("The game is a draw!");
  }
}

playGame();
