/**
 * declare contants for all DOM elements
 * and choices
 *let result = checkWinner(choices[playerMove], choices[computerMove]) updateScores(result);
 * const playerScore = document.getElementById('your-score');
 * const computerScore = document.getElementById('opponent-score');
 */  




const playerChoice = document.getElementById('your-card');
const computerChoice = document.getElementById('opponent-card');
const message = document.getElementsByClassName('interaction-text');
const buttons = document.getElementsByClassName('button');
const choices = ['rock-hand', 'paper-hand', 'scissors-hand'];



/**
 * add event listener to all buttons
 */

 for (let button of buttons) {
    button.addEventListener('click', function () {
        let playerMove = this.getAttribute('data-choice');
        playGame(playerMove);
    });    
}

/**
 * The main game function
 */
function playGame(playerMove) {

    playerChoice.src = `assets/images/${choices[playerMove]}.png`;
    playerChoice.alt = choices[playerMove];

    let computerMove = Math.floor(Math.random() * 3);

    computerChoice.src = `assets/images/${choices[computerMove]}.png`;
    computerChoice.alt = choices[computerMove]


}


function checkWinner() {
    let a = choices[playerMove];
    let b = choices[computerMove];

    if (
        a === 'rock-hand' && b === 'scissors-hand' ||
        a === 'scissors-hand' && b === 'paper-hand' ||
        a === 'paper-hand' && b === 'rock-hand') {
        return "won"
    }

    if (
        b === 'rock-hand' && a === 'scissors-hand' ||
        b === 'scissors-hand' && a === 'paper-hand' ||
        b === 'paper-hand' && a  === 'rock-hand') {
        return "lost"
    }

    if (a === b) {
        return "draw"
    } 
    
}

function updateResults() {
    let yourOldScore = parseInt(document.getElementById('your-score').innerText);
    let computerOldScore = parseInt(document.getElementById('opponent-score').innerText);

    if (checkWinner() === "won") {
        return document.getElementById('your-score').innerText = ++yourOldScore;
    } else {

        if (checkWinner() === "lost") {
            return document.getElementById('your-score').innerText = ++computerOldScore;
        }

    }
} 