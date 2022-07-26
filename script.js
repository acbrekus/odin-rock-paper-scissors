function getComputerChoice(arr) {
 const randomIndex = Math.floor(Math.random() * arr.length);
 const computerPick = computerChoices[randomIndex];
 return computerPick;
}

const computerChoices = ['Rock', 'Paper', 'Scissors'];

const computerSelection = getComputerChoice(computerChoices);
console.log(computerSelection);