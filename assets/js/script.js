/**
 * declare contants for all DOM elements
 * and choices
 *let result = checkWinner(choices[playerMove], choices[computerMove]) updateScores(result);
 * 
 * 
 */  



const playerChoice = document.getElementById('your-card');
const computerChoice = document.getElementById('opponent-card');
const buttons = document.getElementsByClassName('button');
const choices = ['rock-hand', 'paper-hand', 'scissors-hand'];








/**
 * Playermove records players choice using 'click' listener and returns a value
 * to match up with the randomly generated computer value and declare the winner and update the current score
 */
function playGame(playerMove) {

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
        messageWon();
        updatePlayerScore();
    
    } else if (
        choices[playerMove] === "scissors-hand" && choices[computerMove] === "rock-hand" ||
        choices[playerMove] === "paper-hand" && choices[computerMove] === "scissors-hand" ||
        choices[playerMove] === "rock-hand" && choices[computerMove] === "paper-hand"
        ) {
        messageLost();
        updateComputerScore();       
    
    } else if (choices[playerMove] === choices[computerMove]) {
        messageDraw();
    }
}

function updatePlayerScore() {

    let oldScore = parseInt(document.getElementById('your-score').innerText);
    document.getElementById('your-score').innerText = ++oldScore;
}

function updateComputerScore() {

    let oldScore = parseInt(document.getElementById('opponent-score').innerText);
    document.getElementById('opponent-score').innerText = ++oldScore;  
}

function messageWon() {

    document.getElementById('interaction-text').innerText = `Congratulations! You won!`;    
}

function messageLost() {

    document.getElementById('interaction-text').innerText = `Sorry. You Lost.`;    
}

function messageDraw() {

    document.getElementById('interaction-text').innerText = `It's a Draw`;    
}

/**
 * Pop-up button code
 */

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]'); 
const overlay = document.getElementById('overlay');




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
 * initializeGame function contains event listener for players choice and click on pop-up button
 * which is run as soon as the DOMContentLoaded has been verified
 */

function initializeGame() {

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