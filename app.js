
let playerSelection;
let playerScoreCount = 0;
let computerScoreCount = 0;

const buttons = document.querySelectorAll("button");
const pScore = document.createElement('h3');
const cScore = document.createElement('h3');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        playRoundRefactor(playerSelection);
    });
});

window.onload = function() {
    updateTally();  
}

function computerPlay() {

    let computerSelection;
    let num = Math.floor(Math.random() * 3);

    if(num == 0) {
        return computerSelection = "rock";
    } 
    else if(num == 1){
        return computerSelection = "paper";
    }
    else {
        return computerSelection = "scissors";
    }
}

function playRoundRefactor(playerSelection) { 

    let computerSelection = computerPlay();

    const parent = document.querySelector('#win-result');
    if(parent.hasChildNodes()){
        parent.removeChild(parent.firstChild);
    }  

    if(playerSelection === computerSelection) {
        const div = document.createElement('div');
        div.textContent = "You've both played " + playerSelection + ". It's a draw!";
        const result = document.querySelector('#win-result');
        result.appendChild(div); 
        return;
    }

    if(playerSelection === "paper" && computerSelection == "rock") {
        const div = document.createElement('div');
        div.textContent = "You win! Paper beats rock!";
        const result = document.querySelector('#win-result');
        result.appendChild(div); 
        playerScoreCount += 1;
    }
    else if(playerSelection === "rock" && computerSelection == "scissors") {
        const div = document.createElement('div');
        div.textContent = "You win! Rock beats scissors!";
        const result = document.querySelector('#win-result');
        result.appendChild(div);
        playerScoreCount += 1;
    }
    else if(playerSelection === "scissors" && computerSelection == "paper") {
        const div = document.createElement('div');
        div.textContent = "You win! Scissors beats paper!";
        const result = document.querySelector('#win-result');
        result.appendChild(div);
        playerScoreCount += 1;
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        const div = document.createElement('div');
        div.textContent = "You lose! Scissors beats paper!";
        const result = document.querySelector('#win-result');
        result.appendChild(div);
        computerScoreCount += 1;
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        const div = document.createElement('div');
        div.textContent = "You lose! Paper beats rock!";
        const result = document.querySelector('#win-result');
        result.appendChild(div);
        computerScoreCount += 1;
    }
    else {
        const div = document.createElement('div');
        div.textContent = "You lose! Rock beats scissors!";
        const result = document.querySelector('#win-result');
        result.appendChild(div);
        computerScoreCount += 1;
    }

    updateTally();
    winLose();
}

function winLose() {

    if(computerScoreCount === 5) {
        const newDiv = document.createElement('div');
        newDiv.textContent = 'COMPUTER IS FIRST TO SCORE FIVE POINTS! YOU\'VE FOUGHT WITH HONOR, AND NOW YOU DIE WITH GLORY!!!';
        const winResult = document.querySelector('#win-or-lose');
        winResult.appendChild(newDiv);
        tryAgain();
    }
    if(playerScoreCount === 5) {
        const newDiv = document.createElement('div');
        newDiv.textContent = 'PLAYER IS FIRST TO SCORE FIVE POINTS! THE COMPUTER GROVELS FOR ITS LIFE. DO YOU SHOW MERCY?';
        const winResult = document.querySelector('#win-or-lose');
        winResult.appendChild(newDiv);
        tryAgain();
    }
}

function updateTally() {
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');
    pScore.textContent = ' ' + playerScoreCount + '';
    cScore.textContent = ' ' + computerScoreCount + '';
    playerScore.appendChild(pScore);
    computerScore.appendChild(cScore);
}

function tryAgain() {
    setTimeout(function() { 
        const body = document.querySelector('body');
        body.classList.add('hidden');
        setTimeout(function() {
            location.reload();
        }, 1000);
    }, 5000);
}

