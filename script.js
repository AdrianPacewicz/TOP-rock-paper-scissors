let scorePlayer = 0;
let scoreComputer = 0;

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

function verifyGameOver() {
    if (scorePlayer == 5 || scoreComputer == 5 ) {
        console.log(scorePlayer + " - " + scoreComputer);
        const finalMsgP = document.getElementById("final-message");
        finalMsgP
        if (scorePlayer === 5) {
            finalMsgP.innerHTML = "You win the game! :D";
            finalMsgP.style.color = "rgb(92, 246, 74)";
        } else {
            finalMsgP.innerHTML = "You lose the game! :(";
            finalMsgP.style.color = "rgb(140, 112, 81)";
        }
        btns.forEach(btn => changeState(btn));
    }
}

function changeState(btn) {
    if (btn.disabled == false) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
}


function btnClick() {
    const msg = document.getElementById("p-message");
    const scorePlayerP = document.getElementById("score-player");
    const scoreComputerP = document.getElementById("score-computer");
    const result = playRound(this.value, computerPlay());
    msg.innerHTML = result;
    if (result.includes("Win")){
        scorePlayer++;
        scorePlayerP.innerHTML = scorePlayer;
    } else if (result.includes("Lose")) {
        scoreComputer++;
        scoreComputerP.innerHTML = scoreComputer;
    }
    verifyGameOver();
}

function resetClick() {
    scorePlayer = 0;
    scoreComputer = 0;
    const msg = document.getElementById("p-message");
    const scorePlayerP = document.getElementById("score-player");
    const scoreComputerP = document.getElementById("score-computer");
    const finalMsgP = document.getElementById("final-message");
    msg.innerHTML = "";
    scorePlayerP.innerHTML = 0;
    scoreComputerP.innerHTML = 0;
    finalMsgP.innerHTML = "";
    btns.forEach(btn => changeState(btn));
}

const btns = document.querySelectorAll(".btnOption");
btns.forEach (btn => btn.addEventListener('click', btnClick));

const btnReset = document.getElementById("reset");
btnReset.addEventListener('click', resetClick);

//console.log(game());