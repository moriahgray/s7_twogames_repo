class CoinTossGame {
    constructor(gameContentId) {
        this.gameContent = document.getElementById(gameContentId);
        this.choices = ['Heads', 'Tails'];
        this.images = {
            'Heads': 'CoinTossImages/heads.jpg',
            'Tails': 'CoinTossImages/tails.jpg',
        };
        this.scores = [0, 0];
        this.initiateGame();
    }
  
    initiateGame() {
      this.gameContent.innerHTML = '';

      const tossHeading = document.createElement('h2');
      tossHeading.textContent = 'Toss a Coin';
      this.gameContent.appendChild(tossHeading);
  
      const buttonContainer = document.createElement('div');
      buttonContainer.id = 'button-container';
      this.gameContent.appendChild(buttonContainer);

      buttonContainer.appendChild(this.createButton('Heads'));
      buttonContainer.appendChild(this.createButton('Tails'));
  
      const coinImage = this.createImage('CoinTossImages/both.jpg');
      coinImage.id = 'coin-image';
      this.gameContent.appendChild(coinImage);

      this.resultText = document.createElement('div');
      this.resultText.id = 'result-text';
      this.gameContent.appendChild(this.resultText);

      this.winsDisplay = document.createElement('div');
      this.winsDisplay.id = 'wins';
      this.winsDisplay.textContent = 'Wins: 0';
      this.gameContent.appendChild(this.winsDisplay);

      this.lossesDisplay = document.createElement('div');
      this.lossesDisplay.id = 'losses';
      this.lossesDisplay.textContent = 'Losses: 0';
      this.gameContent.appendChild(this.lossesDisplay);
  
      buttonContainer.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        if (isButton) {
          this.tossCoin(event.target.textContent);
        }
      });

      this.gameContent.style.display = 'block';
    }
  
    createButton(label) {
      const button = document.createElement('button');
      button.textContent = label;
      button.className = 'game-button';
      return button;
    }
  
    createImage(src) {
      const image = document.createElement('img');
      image.src = src;
      image.className = 'coin-image';
      return image;
    }
  
    tossCoin(selection) {
        const randomNumber = Math.floor(Math.random() * this.choices.length);
        const coinOutcome = this.choices[randomNumber];
        const coinImage = document.getElementById('coin-image');
        coinImage.src = this.images[coinOutcome];

        if (selection === coinOutcome) {
            this.updateResultText(`You chose ${selection}! The toss is ${coinOutcome}. You chose wisely!`);
            this.updateScore(true);
        } else {
            this.updateResultText(`You chose ${selection}! The toss is ${coinOutcome}. Sorry, wrong choice.`);
            this.updateScore(false);
        }
    }

    updateResultText(text) {
        const resultText = document.getElementById('result-text');
        resultText.textContent = text;
    }

  
updateScore(didWin) {
        if (didWin) {
            this.scores[0]++;
        } else {
            this.scores[1]++;
        }
        this.updateScoreDisplay();
    }
      
    updateScoreDisplay() {
        const winsDisplay = document.getElementById('wins');
        const lossesDisplay = document.getElementById('losses');
        winsDisplay.textContent = `Wins = ${this.scores[0]}`;
        lossesDisplay.textContent = `Losses = ${this.scores[1]}`;
    }
}

export default CoinTossGame;
