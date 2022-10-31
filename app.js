const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a tie!";
    } 
  
    if ((playerSelection.toLowerCase() === "rock" && computerSelection === "paper") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")) {
        computerScore++;
        return "Computer has won!";
    }
    playerScore++;
    return "You have won!";
    
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
}

function game() {
    resetScores();
    for (let i = 0; i < 5; i++){
       let playerSelection = prompt("Enter your choice:");
        while (!choices.includes(playerSelection)) {
            playerSelection = prompt("Enter valid choice:");
        }
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        console.log("You have won");
    } else if (computerScore > playerScore) {
        console.log("You lost. Computer does this better");
    } else {
        console.log("It's a tie!");
    }
}


game();
