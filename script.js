function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice(){
    let choice; 
    while(true) {
        choice = prompt("Choose Rock, Paper, or Scissors").toUpperCase(); 
        if (choice == "ROCK" || choice == "PAPER" || choice == "SCISSORS"){
            return choice; 
        } else {
            alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
        } 
    }
}


let humanScore = 0; 
let computerScore = 0; 

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log("It's a tie!");
    } else if (humanChoice == "ROCK" && computerChoice == "SCISSORS" || 
        humanChoice =="PAPER" && computerChoice == "ROCK" ||
        humanChoice == "SCISSORS" && computerChoice == "PAPER"){
        humanScore++; 
        console.log(`You Win! ${humanChoice} beats %{computerChoice}!`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}!`);
        computerScore++; 
    }
}