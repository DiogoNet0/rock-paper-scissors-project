function playGame() {
  // Variables that keep track of the scores
  let playerScore = 0;
  let computerScore = 0;

  // Button selectors
  const BTN_NINJA = document.querySelector("#ninja");
  const BTN_SAMURAI = document.querySelector("#samurai");
  const BTN_ONI = document.querySelector("#oni");

  // Score selectors
  const PLAYER_SCORE_DISPLAY = document.querySelector("#player-score");
  const COMPUTER_SCORE_DISPLAY = document.querySelector("#computer-score");

  // Result display selector
  const RESULT_DISPLAY = document.querySelector("#result");

  // Randomly generates a choice for the game
  function getComputerChoice() {
    const CHOICES = ["ninja", "samurai", "oni"];
    const RANDOM_INDEX = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[RANDOM_INDEX];
  }

  // Handle button clicks
  function handleButtonClick(event) {
    const PLAYER_CHOICE = event.target.id;
    const RESULT = playRound(PLAYER_CHOICE, getComputerChoice());
    RESULT_DISPLAY.textContent = RESULT;

    PLAYER_SCORE_DISPLAY.textContent = playerScore;
    COMPUTER_SCORE_DISPLAY.textContent = computerScore;

    if (playerScore === 5 || computerScore === 5) {
      declareWinner();
    }
  }

  // Play one round and return the result
  function playRound(PLAYER_CHOICE, computerChoice) {
    if (PLAYER_CHOICE === computerChoice) {
      return "It's a draw!";
    } else if (
      (PLAYER_CHOICE === "ninja" && computerChoice === "oni") ||
      (PLAYER_CHOICE === "samurai" && computerChoice === "ninja") ||
      (PLAYER_CHOICE === "oni" && computerChoice === "samurai")
    ) {
      playerScore++;
      return `You Win! ${PLAYER_CHOICE.charAt(0).toUpperCase() + PLAYER_CHOICE.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}!`;
    } else {
      computerScore++;
      return `You Lost! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${PLAYER_CHOICE.charAt(0).toUpperCase() + PLAYER_CHOICE.slice(1)}!`;
    }
  }

  // Declare the winner
  function declareWinner() {
    if (playerScore > computerScore) {
      RESULT_DISPLAY.textContent = "Congratulations! You won the game!";
    } else {
      RESULT_DISPLAY.textContent = "OH NO! The computer won the game!";
    }

    // Reset scores for a new game
    playerScore = 0;
    computerScore = 0;
    PLAYER_SCORE_DISPLAY.textContent = playerScore;
    COMPUTER_SCORE_DISPLAY.textContent = computerScore;
  }

  // Attach event listeners to buttons
  BTN_NINJA.addEventListener("click", handleButtonClick);
  BTN_SAMURAI.addEventListener("click", handleButtonClick);
  BTN_ONI.addEventListener("click", handleButtonClick);
}

playGame();
