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
            return `You won! ${playerSelection} beats ${computerSelection}.` 
    } else {
        return `You lost! ${computerSelection} beats ${playerSelection}.`
    }
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice(computerChoices);
console.log(playRound(playerSelection, computerSelection));