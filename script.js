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
    const rockButton = document.querySelector("#rock"); 

    rockButton.addEventListener("click", () => {
        console.log('rock'); 
    });

    const paperButton = document.querySelector("#paper"); 

    paperButton.addEventListener("click", () => {
        console.log('paper'); 
    });

    const scissorsButton = document.querySelector("#scissors"); 

    scissorsButton.addEventListener("click", () => {
        console.log('scissors'); 
    });
}

function playGame(){
    
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

    for (let i = 0; i < 5; i++){
        console.log(`Round ${i + 1}`); 
        let humanScore = 0; 
        let computerScore = 0; 

        const winner = playRound(humanChoice, computerChoice);

        // Update scores
        if (winner === "human") {
            humanScore++;
        } else if (winner === "computer") {
            computerScore++;
        }

        // Display current scores
        console.log(`Current Score: Human - ${humanScore}, Computer - ${computerScore}`);
    }

    // Declare the final winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game. Better luck next time!");
    } else {
        console.log("It's a tie overall!");
    }

}

getHumanChoice(); 