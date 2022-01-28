class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
  }

  createBoard() {
    this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.heigth);
    drawLines();
  }

  drawLines() {

  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}

let hangmanCanvas = new HangmanCanvas('hello');

hangmanCanvas.createBoard();

const btnStart = document.querySelector('#start-game-button');
