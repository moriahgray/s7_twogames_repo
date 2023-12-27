export default class GuessingGame {
    constructor() {
        this.randomNumber = Math.floor(Math.random() * 100) + 1;
        this.guesses = 0;
        this.guessField = document.getElementById('guessField');
        this.guessesText = document.getElementById('guessesText');
        this.message = document.querySelector('.message span');
        this.resetButton = document.getElementById('resetButton');
        this.guessList = document.getElementById('guessList');
        this.form = document.querySelector('form');
        this.resetGame = this.resetGame.bind(this);
        this.form.addEventListener('submit', (event) => this.checkGuess(event));
        this.resetButton.addEventListener('click', this.resetGame);
        this.resetButton.style.display = 'none';
    }

    checkGuess(event) {
        event.preventDefault();
        const userGuess = Number(this.guessField.value);
        this.guessField.value = '';
        this.guesses++;

        if (userGuess === this.randomNumber) {
            this.displayMessage("Correct! Way to go!", 'justRight');
            this.endGame();
        } else if (this.guesses === 10) {
            this.displayMessage(`Too many tries! Sucker! The number was ${this.randomNumber}.`, 'tooMany');
            this.endGame();
        } else {
            if (userGuess < this.randomNumber) {
                this.displayMessage("WRONG, that guess was too SMALL.", 'tooSmall');
            } else if (userGuess > this.randomNumber) {
                this.displayMessage("WRONG, that guess was too BIG!", 'tooBig');
            }
        }
        this.updateGuesses(userGuess);
    }

    displayMessage(msg, className) {
        this.message.textContent = msg;
        this.message.className = '';
        this.message.classList.add(className);
    }

    updateGuesses(guess) {
        const guessSpan = document.createElement("span");
        guessSpan.textContent = guess + ' ';
        guessSpan.className = 'guess';
        this.guessList.appendChild(guessSpan);
    }

    endGame() {
        this.guessField.disabled = true;
        this.resetButton.style.display = 'inline';
    }

    resetGame() {
        this.guesses = 0;
        this.randomNumber = Math.floor(Math.random() * 100) + 1;
        this.guessField.disabled = false;
        this.guessField.value = '';
        this.guessList.innerHTML = '';
        this.message.textContent = '';
        this.message.className = '';
        
        this.resetButton.style.display = 'none';
        this.guessField.focus();
    }
}
