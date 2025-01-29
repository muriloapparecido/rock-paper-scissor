// Select the container element
const container = document.querySelector("#container");

// Create elements dynamically
const round = document.createElement("div"); 
const game = document.createElement("div"); 
const score = document.createElement("div"); 

// Append elements to the container
container.appendChild(round);
container.appendChild(game);
container.appendChild(score);

// Function to get a random choice for the computer
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
    }
}

// Global variables
let humanChoice = ""; 
let roundNumber = 1; 
let humanScore = 0;
let computerScore = 0;

// Function to set up event listeners 
function getHumanChoice(){
    const rockButton = document.querySelector("#rock"); 

    rockButton.addEventListener("click", () => {
        humanChoice = 'ROCK'; 
        playRound(); 
    });

    const paperButton = document.querySelector("#paper"); 

    paperButton.addEventListener("click", () => {
        humanChoice = 'PAPER'; 
        playRound(); 
    });

    const scissorsButton = document.querySelector("#scissors"); 

    scissorsButton.addEventListener("click", () => {
        humanChoice = 'SCISSORS'; 
        playRound(); 
    });
}

//Simulate a round
function playRound(){
    let computerChoice = getComputerChoice(); 

    //Update round number 
    round.textContent = `Round ${roundNumber}`; 
    roundNumber++; 

    //Determine winner
    if (humanChoice == computerChoice){
        game.textContent = "It's a tie!";
    } else if (
        (humanChoice == "ROCK" && computerChoice == "SCISSORS") || 
        (humanChoice =="PAPER" && computerChoice == "ROCK") ||
        (humanChoice == "SCISSORS" && computerChoice == "PAPER")
    ){
        humanScore++; 
        game.textContent = `You Win! ${humanChoice} beats ${computerChoice}!`;
    } else {
        game.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
        computerScore++; 
    }

    updateScore(); 
}

//Function to update the score
function updateScore(){
    score.textContent = `Current Score: You - ${humanScore}, Computer - ${computerScore}`;

    if (humanScore >= 5) {
        alert("Congratulations! You won the game!");
        resetGame();
    } else if (computerScore >= 5) {
        alert("You lost the game. Better luck next time!");
        resetGame();
    }
}

//Function to reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundNumber = 1;
    score.textContent = "Current Score: You - 0, Computer - 0";
    game.textContent = "Make a choice!";
}

getHumanChoice()