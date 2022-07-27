function getComputerChoice(arr) {
    return arr[(Math.floor(Math.random()*arr.length))];
}

const computerChoices = ['Rock', 'Paper', 'Scissors'];

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock paper scissors shoot!");
    computerSelection = getComputerChoice(computerChoices);
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        console.log("It's a draw!");
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
            (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') ||
            (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock')) {
                playerScore += 1;
                console.log(`You won! ${playerSelection} beats ${computerSelection}.`);           
    } else {
        computerScore += 1;
        console.log(`You lost! ${computerSelection} beats ${playerSelection}.`);
        
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
        if (i===4) {
            if (playerScore === computerScore) {
                console.log("The game is tied!");
            } else if (playerScore > computerScore) {
                console.log("You won the game!");
            } else {
                console.log("You lost the game!");
            }
        }
    }
}