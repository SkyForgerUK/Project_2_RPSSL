/**
 * declare contants for all DOM elements
 * and choices
 *let result = checkWinner(choices[playerMove], choices[computerMove]) updateScores(result);
 * 
 * 
 */  





const choices = ['rock-hand', 'paper-hand', 'scissors-hand'];
let overlay = document.getElementById('overlay');

/**
 * Playermove records players choice using 'click' listener and returns a value
 * to match up with the randomly generated computer value and declare the winner and update the current score
 */
function playGame(playerMove) {
    let playerChoice = document.getElementById('your-card');
    let computerChoice = document.getElementById('opponent-card');

    playerChoice.src = `assets/images/${choices[playerMove]}.png`;
    playerChoice.alt = choices[playerMove];

    let computerMove = Math.floor(Math.random() * 3);

    computerChoice.src = `assets/images/${choices[computerMove]}.png`;
    computerChoice.alt = choices[computerMove];

    if (
        choices[playerMove] === "rock-hand" && choices[computerMove] === "scissors-hand" ||
        choices[playerMove] === "scissors-hand" && choices[computerMove] === "paper-hand" ||
        choices[playerMove] === "paper-hand" && choices[computerMove] === "rock-hand"
        ) {
        displayResult(`Congratulations! You won!`);
        updateScore('your-score');
    
    } else if (
        choices[playerMove] === "scissors-hand" && choices[computerMove] === "rock-hand" ||
        choices[playerMove] === "paper-hand" && choices[computerMove] === "scissors-hand" ||
        choices[playerMove] === "rock-hand" && choices[computerMove] === "paper-hand"
        ) {
        displayResult(`Sorry. You Lost.`);
        updateScore('opponent-score');       
    
    } else if (choices[playerMove] === choices[computerMove]) {
        displayResult(`It's a Draw`);
    }
}

function updateScore(newScore) {

    let oldScore = parseInt(document.getElementById(newScore).innerText);
    document.getElementById(newScore).innerText = ++oldScore;
}

function displayResult(resultMessage) {

    document.getElementById('interaction-text').innerText = resultMessage;
}

/**
 * Pop-up button code allows for opening ang closing of the pop-up button
 */

function openModal(modal) {
    if (modal == null ) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null ) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

/**
 * InitializeGame function contains event listener for players choice and click on pop-up button
 * which is run as soon as the DOMContentLoaded has been verified
 */

function initializeGame() {
    let buttons = document.getElementsByClassName('button');
    let openModalButtons = document.querySelectorAll('[data-modal-target]');
    let closeModalButtons = document.querySelectorAll('[data-close-button]'); 

 for (let button of buttons) {
    button.addEventListener('click', function () {
        let playerMove = this.getAttribute('data-choice');
        playGame(playerMove);
    });    
}

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    });

});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});
    
}

window.addEventListener('DOMContentLoaded', initializeGame);