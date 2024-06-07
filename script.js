function playGame() {
  // Variables that keep track of the scores
  let playerScore = 0;
  let computerScore = 0;

  // Styles for Win/Loss Message
  const PLAYER_LETTER = "font-size:20px; color: green;";
  const COMPUTER_LETTER = "font-size:20px; color: red;";

  // Randomly generates a choice for the game
  function getComputerChoice() {
    const CHOICES = ["rock", "paper", "scissors"];
    const RANDOM_INDEX = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[RANDOM_INDEX];
  }

  // Gets an input from the player and checks if its valid or not
  function getPlayerChoice() {
    const USER_INPUT = prompt(
      "Enter your choice (rock, paper, scissors): "
    ).toLowerCase();

    if (
      USER_INPUT === "rock" ||
      USER_INPUT === "paper" ||
      USER_INPUT === "scissors"
    ) {
      return USER_INPUT;
    } else {
      console.log("Invalid choice! Please enter rock, paper, or scissors.");
      return getPlayerChoice();
    }
  }

  // Converts the functions to variables
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
    const PLAYER_CHOICE = getPlayerChoice();
    const COMPUTER_CHOICE = getComputerChoice();
    const result = playRound(PLAYER_CHOICE, COMPUTER_CHOICE);
    alert(result);
    console.log(`%cRound ${i + 1}: ${result}`, "font-size:20px");
  }

  // Declare the winner
  console.log("%cPlayer Score:", PLAYER_LETTER, playerScore);
  console.log("%cComputer Score:", COMPUTER_LETTER, computerScore);
  if (playerScore > computerScore) {
    console.log("%cCongratulations! You won the game!", "font-size:35px");
  } else if (playerScore < computerScore) {
    console.log("%cOH NO! The computer won the game!", "font-size:35px");
  } else {
    console.log("%cThe game is a draw!", "font-size:35px");
  }
}

playGame();
