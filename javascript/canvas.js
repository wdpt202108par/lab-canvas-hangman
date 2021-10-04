class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord= secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    let x = 200;
    let w = 60;
    let space = 10;
    let y = 780;
    
    for (let i=0; i<this.secretWord.length; i++){
      this.context.beginPath();
      this.context.moveTo(x, y);
      this.context.lineTo(x+w, y);
      this.context.lineWidth = 4;
      this.context.stroke();
      this.context.closePath();  
      x+= space+w;    
    }
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
