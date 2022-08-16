class GuessingGame {
    constructor(startN, endN, n) {
      this.startN = 0;
      this.endN = 0;
      this.n = 0;
    }
  
    setRange(min, max) {
      this.startN = min;
      this.endN = max;
    }
  
    guess() {
      if (this.endN - this.startN > 0) {
        this.n = this.endN - Math.trunc((this.endN - this.startN) / 2);
      } else {
        this.n = this.endN;
      }
      return this.n;
    }
  
    lower() {
      this.endN = this.n;
    }
  
    greater() {
      this.startN = this.n;
    }
  }
  
  module.exports = GuessingGame;