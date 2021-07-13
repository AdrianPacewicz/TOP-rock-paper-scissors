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
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5 ; i++) {
        let playerSelection = prompt("Input your play (rock / paper / scissors)");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection)
        console.log(result);
        if (result.includes("Win")){
            scorePlayer++;
        } else if (result.includes("Lose")) {
            scoreComputer++;
        }
    }
    if (scorePlayer > scoreComputer) {
        return "You win the game! :D\nFinal result: P:" + scorePlayer + " - C:" + scoreComputer;
    } else if (scoreComputer > scorePlayer) {
        return "You lose the game! :(\nFinal result: P:" + scorePlayer + " - C:" + scoreComputer;
    } else {
        return "Tied game.\nFinal result: P:" + scorePlayer + " - C:" + scoreComputer;
    }
}

function btnClick() {
    const msg = document.querySelector("#p-message");
    msg.innerHTML = playRound(this.value, computerPlay());
}

const btns = document.querySelectorAll(".btnOption");
btns.forEach (btn => btn.addEventListener('click', btnClick));

//console.log(game());