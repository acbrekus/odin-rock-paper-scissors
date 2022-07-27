function getComputerChoice(arr) {
    return arr[(Math.floor(Math.random()*arr.length))];
}

const computerChoices = ['Rock', 'Paper', 'Scissors'];

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock paper scissors shoot!");
    computerSelection = getComputerChoice(computerChoices);
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "It's a draw!";
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
            (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') ||
            (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock')) {
                playerScore += 1;
                return `You won! ${playerSelection} beats ${computerSelection}.`;
            
    } else {
        computerScore += 1;
        return `You lost! ${computerSelection} beats ${playerSelection}.`;
        
    }
}



let playerSelection = "Rock";
let computerSelection = getComputerChoice(computerChoices);


let playerScore = 0;
let computerScore = 0;

function game() {
    for (i=0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        console.log('The score is ', playerScore, ' to ', computerScore);
    }
}