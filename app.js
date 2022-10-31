const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 0;
const playButtons = document.querySelectorAll(".play-btn");
const resultsDiv = document.querySelector(".results");
const newGameBtn = document.querySelector("#newGame");


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableBtn() {
    playButtons.forEach(btn => {
        btn.disabled = true;
    });
}

function playRound(playerSelection, computerSelection) {
    if (computerScore === 5) {
        const h3 = document.createElement("h3");
        h3.textContent = "GAME OVER! Computer won!";
        resultsDiv.appendChild(h3);
        disableBtn();
        return;
    }
    if (playerScore === 5) {
        const h3 = document.createElement("h3");
        h3.textContent = "GAME OVER! You won!";
        resultsDiv.appendChild(h3);
        disableBtn();
        return;
    }
    if (playerSelection.toLowerCase() === computerSelection) {
        numberOfRounds++;
        const h4 = document.createElement("h4");
        h4.textContent = `Round ${numberOfRounds}: It's a tie!`;
        resultsDiv.appendChild(h4);
    }

    else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "paper") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")) {
        computerScore++;
        numberOfRounds++;
        const h4 = document.createElement("h4");
        h4.textContent = `Round ${numberOfRounds}: Computer won this one!`;
        resultsDiv.appendChild(h4);
    } else {
        numberOfRounds++;
        playerScore++;
        const h4 = document.createElement("h4");
        h4.textContent = `Round ${numberOfRounds}: You have won!`;
        resultsDiv.appendChild(h4);
    }

}

function setNewGame() {
    resultsDiv.replaceChildren();
    playerScore = 0;
    computerScore = 0;
    numberOfRounds = 0;
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
