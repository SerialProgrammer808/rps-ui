/*Select items and create event listeners*/
let rock = document.querySelector(".rock");
rock.addEventListener("click", () => playRound(1));

let paper = document.querySelector(".paper");
paper.addEventListener("click", () => playRound(2));

let scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => playRound(3));

let computerScore = 0;
let playerScore = 0;

/*logic for winning and scorekeeping*/
function playRound(personChoice) {
    let computerChoice = getComputerChoice();
    editChoiceText(personChoice, computerChoice);
    updateImage(personChoice, computerChoice)

    if (personChoice === computerChoice) {
        decision("it's a tie", personChoice, computerChoice);
    }
    else if (personChoice === 3 && computerChoice === 1) {
        computerScore += 1;
        decision("computer wins", personChoice, computerChoice);
        updateScore(playerScore, computerScore);
    }
    else if (computerChoice === 3 && personChoice === 1) {
        playerScore += 1;
        decision("you win", personChoice, computerChoice);
        updateScore(playerScore, computerScore);
    }
    else if (computerChoice > personChoice) {
        computerScore += 1;
        decision("computer wins", personChoice, computerChoice);
        updateScore(playerScore, computerScore);
    }
    else if (personChoice > computerChoice) {
        playerScore += 1;
        decision("you win", personChoice, computerChoice);
        updateScore(playerScore, computerScore);
    }
}

function getComputerChoice() {
    let number = Math.floor(Math.random()*3+1);
    return number
    /*1=rock, 2=paper, 3=scisors*/
}

function convertChoice(number) {
    if (number === 1) {
        return "rock";
    }
    else if (number === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function editChoiceText (personChoice, computerChoice) {
    let personChoiceTextbox = document.querySelector(".playChoice");
    let computerChoiceTextbox = document.querySelector(".compChoice");

    personChoiceTextbox.textContent = `You chose: ${convertChoice(personChoice)}`;
    computerChoiceTextbox.textContent = `Computer chose: ${convertChoice(computerChoice)}`;
}

function decision(decision, personChoice, computerChoice) {
    let decisionText = document.querySelector(".outcome");
    decisionText.textContent = `You chose ${convertChoice(personChoice)} computer chose ${convertChoice(computerChoice)}, 
    ${decision}!`;
    decisionText.style.fontSize = "20px";
}

function updateScore(playerScore, computerScore) {
    let orgScore = document.querySelector(".M")
    let machScore = document.querySelector(".m")

    orgScore.textContent = `Player: ${playerScore}`;
    machScore.textContent = `Player: ${computerScore}`;
}

function updateImage(personChoice, computerChoice) {
    personChoice = convertChoice(personChoice);
    computerChoice = convertChoice(computerChoice);

    let playerChoiceImageDiv = document.querySelector(".player-choice");
    let computerChoiceImageDiv = document.querySelector(".computer-choice");

    playerChoiceImageDiv.innerHTML = `<img src="${personChoice}.gif" style="max-width:200">`
    computerChoiceImageDiv.innerHTML = `<img src="${computerChoice}.gif" style="max-width:200">`
}