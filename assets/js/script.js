/**
 * declare contants for all DOM elements
 * and choices 
 */

const choices = ['rock', 'paper', 'scissors'];
let overlay = document.getElementById('overlay');

/**
 * Playermove records players choice using 'click' listener and returns a value
 * to match up with the randomly generated computer value and declare the winner and update the current score
 */

function playGame(playerMove) {
    let playerChoice = document.getElementById('your-card');
    let computerChoice = document.getElementById('opponent-card');

    playerChoice.src = `assets/images/${choices[playerMove]}.jpg`;
    playerChoice.alt = choices[playerMove];

    let computerMove = Math.floor(Math.random() * 3);

    computerChoice.src = `assets/images/${choices[computerMove]}.jpg`;
    computerChoice.alt = choices[computerMove];

    if (
        choices[playerMove] === "rock" && choices[computerMove] === "scissors" ||
        choices[playerMove] === "scissors" && choices[computerMove] === "paper" ||
        choices[playerMove] === "paper" && choices[computerMove] === "rock"
    ) {
        displayResult(`Great! You won!`);
        updateScore('your-score');

    } else if (
        choices[playerMove] === "scissors" && choices[computerMove] === "rock" ||
        choices[playerMove] === "paper" && choices[computerMove] === "scissors" ||
        choices[playerMove] === "rock" && choices[computerMove] === "paper"
    ) {
        displayResult(`Sorry. You Lost.`);
        updateScore('opponent-score');

    } else if (choices[playerMove] === choices[computerMove]) {
        displayResult(`It is a Draw.`);
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
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
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