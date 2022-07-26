function getComputerChoice(arr) {
    return arr[(Math.floor(Math.random()*arr.length))];
}

const computerChoices = ['Rock', 'Paper', 'Scissors'];

function playRound(playerSelection, computerSelection) {
    if (playerSelection = computerSelection) {
        return "It's a draw!";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'rock')) {
            return `You won! ${playerSelection} beats ${computerSelection}.` 
    } else {
        return `You lost! ${computerSelection} beats ${playerSelection}.`
    }
    

}

const playerSelection = "rock";
const computerSelection = getComputerChoice(computerChoices);