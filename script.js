// script.js

// Seleciona os elementos
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const messageElement = document.getElementById('message');
const attemptsElement = document.getElementById('attempts');
const resetButton = document.getElementById('reset');

let minNumber = 1;
let maxNumber = 100;
let secretNumber = getRandomNumber(minNumber, maxNumber);
let attempts = 0;

// Função para obter um número aleatório entre min e max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para lidar com o envio do palpite
function handleGuess() {
    const guess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(guess)) {
        messageElement.textContent = 'Por favor, insira um número válido.';
        return;
    }

    if (guess < minNumber || guess > maxNumber) {
        messageElement.textContent = `Por favor, insira um número entre ${minNumber} e ${maxNumber}.`;
        return;
    }

    if (guess === secretNumber) {
        messageElement.textContent = `Parabéns! Você acertou o número ${secretNumber}.`;
        submitButton.disabled = true;
        guessInput.disabled = true;
        resetButton.style.display = 'block';
    } else if (guess < secretNumber) {
        messageElement.textContent = 'Muito baixo! Tente novamente.';
    } else {
        messageElement.textContent = 'Muito alto! Tente novamente.';
    }

    attemptsElement.textContent = `Tentativas: ${attempts}`;
}

// Função para reiniciar o jogo
function resetGame() {
    secretNumber = getRandomNumber(minNumber, maxNumber);
    attempts = 0;
    attemptsElement.textContent = `Tentativas: ${attempts}`;
    messageElement.textContent = '';
    guessInput.value = '';
    submitButton.disabled = false;
    guessInput.disabled = false;
    resetButton.style.display = 'none';
}

// Adiciona event listeners
submitButton.addEventListener('click', handleGuess);
resetButton.addEventListener('click', resetGame);

// Inicializa o jogo
function initGame() {
    document.getElementById('min-number').textContent = minNumber;
    document.getElementById('max-number').textContent = maxNumber;
    resetGame();
}

// Inicia o jogo
initGame();
