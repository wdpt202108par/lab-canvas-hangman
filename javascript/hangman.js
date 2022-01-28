class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.letters = []; // all unique letters tried
    this.guessedLetters = ''; // the already found letters
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    const rand = Math.floor(Math.random()*this.words.length);
    return this.words[rand];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    const codes = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
    
    if (codes.includes(keyCode)) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (this.letters.includes(letter)) {
      // already present
      return false;
    } else {
      // not already present
      this.letters.push(letter);
      return true;
    }
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft--;
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

  checkWinner() {
    // ... your code goes here
    if (this.guessedLetters.length === [...new Set(this.secretWord)].length) {
      return true;
    } else {
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
