function computerPlay() {
    let number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            return "ERROR";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    let result = 0;
    let playerInput = playerSelection.toUpperCase();
    if (playerInput != "ROCK" && playerInput != "PAPER" && playerInput != "SCISSORS") {
        return "Incorrect input. (Must enter 'rock' / 'paper' / 'scissors'"
    } else {
        if (playerInput == "ROCK") {
            if (computerSelection.toUpperCase() == "ROCK") {
                return "It's a draw"
            }
            if (computerSelection.toUpperCase() == "PAPER") {
                return "You Lose! Paper beats Rock"
            }
            if (computerSelection.toUpperCase() == "SCISSORS") {
                return "You Win! Rock beats Scissors"
            }
        }
        if (playerInput == "PAPER") {
            if (computerSelection.toUpperCase() == "PAPER") {
                return "It's a draw"
            }
            if (computerSelection.toUpperCase() == "SCISSORS") {
                return "You Lose! Scissors beats Paper"
            }
            if (computerSelection.toUpperCase() == "ROCK") {
                return "You Win! Paper beats Rock"
            }
        }
        if (playerInput == "SCISSORS") {
            if (computerSelection.toUpperCase() == "SCISSORS") {
                return "It's a draw"
            }
            if (computerSelection.toUpperCase() == "ROCK") {
                return "You Lose! Rock beats Scissors"
            }
            if (computerSelection.toUpperCase() == "PAPER") {
                return "You Win! Scissors beats Paper"
            }
        }
    }


    return result;
}

function game() {
    let finish = 0;
    let scorePlayer = 0;
    let scoreComputer = 0;
    while (finish == 0) {
        let result = playRound(playerSelection, computerSelection)

    }
    
}

const playerSelection = prompt("Input your play (rock / paper / scissors)");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));