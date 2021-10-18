class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 800, 1200)
    this.drawLines()
  }

  drawLines() {
    // ... your code goes here
    var xStart = 100; 
    var xEnd = 200;
    
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(xStart, 150) ; 
      this.context.lineTo(xEnd, 150) ;
      this.context.stroke()
      xStart = xEnd + 20;
      xEnd = xStart + 100 ;
      this.context.closePath()
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

let test = new HangmanCanvas(`Bonjour`)
test.drawLines()
