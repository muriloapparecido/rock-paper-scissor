// Select the container element
const container = document.querySelector("#container");
container.style.display = "flex"; 
container.style.flexDirection = "column"; 
container.style.justifyContent = "center"; 
container.style.alignItems = "center"; 
container.style.height = "100vh";
container.style.backgroundColor = "#C4A484";
container.style.gap = "20px"; 

document.body.style.margin = "0";

const title = document.createElement("h1"); 
title.textContent = "Rock, Paper, Scissors Simulator";
title.style.position = "absolute";  
title.style.top = "0";
title.style.padding = "40px"; 
title.style.width = "100%"; 
title.style.textAlign = "center"; 
title.style.borderBottom = "2px solid black"; 
title.style.marginTop = "0";
title.style.backgroundColor = "#FFF8E7"; 
container.appendChild(title); 

const rps = document.querySelector("#rps"); 
rps.style.display = "flex"; 
rps.style.width = "500px"; 
rps.style.justifyContent = "center";
rps.style.gap = "100px"; 
rps.style.height = "100px";



// Create elements dynamically
const round = document.createElement("h4"); 
const game = document.createElement("h4"); 
const score = document.createElement("h4"); 

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
    rockButton.style.width = "100px";
    rockButton.style.border = "2px solid black";
    rockButton.style.borderRadius = "5px";

    rockButton.addEventListener("click", () => {
        humanChoice = 'ROCK'; 
        playRound(); 
    });

    const paperButton = document.querySelector("#paper"); 
    paperButton.style.width = "100px";
    paperButton.style.border = "2px solid black";
    paperButton.style.borderRadius = "5px";

    paperButton.addEventListener("click", () => {
        humanChoice = 'PAPER'; 
        playRound(); 
    });

    const scissorsButton = document.querySelector("#scissors"); 
    scissorsButton.style.width = "100px";
    scissorsButton.style.border = "2px solid black"
    scissorsButton.style.borderRadius = "5px";

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