import CoinTossGame from './cointoss.js';
import GuessingGame from './guessinggame.js';

function openGame(evt, gameName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (const content of tabcontent) {
        content.style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablinks");
    for (const tablink of tablinks) {
        tablink.className = tablink.className.replace(" active", "");
    }

    document.getElementById(gameName).style.display = "block";
    evt.currentTarget.className += " active";

    if (gameName === 'CoinToss') {
        new CoinTossGame('CoinToss');
    } else if (gameName === 'GuessingGame') {
        new GuessingGame();
    }
}

window.openGame = openGame;
