function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt(`Enter your choice: "rock", "paper" or "scissors".`);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log(`It's a draw! Both players chose ${humanChoice}.`)
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`Computer chose ${computerChoice}.`)
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            humanScore += 1;
        } else {
            console.log(`Computer chose ${computerChoice}.`)
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
            computerScore += 1;
        }
    }

    let humanSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    let result;
    if (humanScore > computerScore) {
        result = "win";
    } else if (humanScore < computerScore) {
        result = "lose";
    } else {
        result = "draw";
    }
    console.log(`Final Results\nYou: ${humanScore}. Computer: ${computerScore}. You ${result}!`)
}

playGame();