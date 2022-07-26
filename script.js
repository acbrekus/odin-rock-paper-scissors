function getComputerChoice(arr) {
    return arr[(Math.floor(Math.random()*arr.length))];
}

const computerChoices = ['Rock', 'Paper', 'Scissors'];

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "It's a draw!";
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
            (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') ||
            (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock')) {
            return `You won! ${playerSelection} beats ${computerSelection}.`;
            playerScore =+ 1;
    } else {
        return `You lost! ${computerSelection} beats ${playerSelection}.`;
        computerScore =+ 1;
    }
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice(computerChoices);

function game() { 
    for (let i=0; i <=4; i++) {
        
    }
}

const playerScore = 0;
const computerScore = 0;