const playButtons = document.querySelectorAll(".play-btn");
const newGameBtn = document.querySelector("#newGame");
const roundResult = document.querySelector("#round-result");
const score = document.querySelector("#score");
const finalResult = document.querySelector("#final-result");
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 1;


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableBtn() {
    playButtons.forEach(btn => {
        btn.disabled = true;
    });
}

function setRoundResult(winnerSelection, loserSelection, winner) {
    if (winnerSelection === loserSelection) {
        roundResult.textContent = `Round ${numberOfRounds}: Same choice! It's a tie!`;
    } else {
        roundResult.textContent = `Round ${numberOfRounds}: ${winnerSelection.toUpperCase()} beats ${loserSelection.toUpperCase()} ! 
        ${winner} won this one!`;
    }
    score.textContent = `SCORE: PLAYER: ${playerScore} ~ COMPUTER: ${computerScore}`;

}

function setFinalScore(winner) {
    finalResult.textContent = `GAME OVER! ${winner.toUpperCase()} WON!`;
    disableBtn();
}

function checkForWinner() {
    if (computerScore === 5) {
        setFinalScore("computer");
    }
    if (playerScore === 5) {
        setFinalScore("player");
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        setRoundResult(computerSelection, playerSelection);
    }

    else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "paper") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")) {
        computerScore++;
        setRoundResult(computerSelection, playerSelection, "computer");
    } else {
        playerScore++;
        setRoundResult(playerSelection, computerSelection, "player");
    }
    checkForWinner();
    numberOfRounds++;
}

function setNewGame() {
    score.textContent = "";
    roundResult.textContent = "";
    finalResult.textContent = "";
    playerScore = 0;
    computerScore = 0;
    numberOfRounds = 1;
    playButtons.forEach(btn => {
        btn.disabled = false;
    });
}

playButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        playRound(btn.id, computerSelection);
    });
});

newGameBtn.addEventListener("click", setNewGame);
