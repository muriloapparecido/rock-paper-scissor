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
