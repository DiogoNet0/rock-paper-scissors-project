function playGame() {
  // Variables that keep track of the scores
  let playerScore = 0;
  let computerScore = 0;

  // Button selectors
  const btnNinja = document.querySelector("#ninja");
  const btnSamurai = document.querySelector("#samurai");
  const btnOni = document.querySelector("#oni");

  // Score selectors
  const playerScoreDisplay = document.querySelector("#player-score");
  const computerScoreDisplay = document.querySelector("#computer-score");

  // Result display selector
  const resultDisplay = document.querySelector("#result");

  // Randomly generates a choice for the game
  function getComputerChoice() {
    const CHOICES = ["ninja", "samurai", "oni"];
    const RANDOM_INDEX = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[RANDOM_INDEX];
  }

  // Handle button clicks
  function handleButtonClick(event) {
    const playerChoice = event.target.id;
    const result = playRound(playerChoice, getComputerChoice());
    resultDisplay.textContent = result;

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    if (playerScore === 5 || computerScore === 5) {
      declareWinner();
    }
  }

  // Play one round and return the result
  function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a draw!";
    } else if (
      (playerChoice === "ninja" && computerChoice === "oni") ||
      (playerChoice === "samurai" && computerChoice === "ninja") ||
      (playerChoice === "oni" && computerChoice === "samurai")
    ) {
      playerScore++;
      return `You Win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}!`;
    } else {
      computerScore++;
      return `You Lost! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}!`;
    }
  }

  // Declare the winner
  function declareWinner() {
    if (playerScore > computerScore) {
      resultDisplay.textContent = "Congratulations! You won the game!";
    } else {
      resultDisplay.textContent = "OH NO! The computer won the game!";
    }

    // Reset scores for a new game
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
  }

  // Attach event listeners to buttons
  btnNinja.addEventListener("click", handleButtonClick);
  btnSamurai.addEventListener("click", handleButtonClick);
  btnOni.addEventListener("click", handleButtonClick);
}

playGame();
