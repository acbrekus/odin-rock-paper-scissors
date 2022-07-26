function getComputerChoice(arr) {
 return arr[(Math.floor(Math.random()*arr.length))];
}

const computerChoices = ['Rock', 'Paper', 'Scissors'];
console.log(getComputerChoice(computerChoices));