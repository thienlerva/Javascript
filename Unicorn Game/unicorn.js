// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/147-chrome-dinosaur.html
// https://youtu.be/l0HoJHc-63Q

// Google Chrome Dinosaur Game (Unicorn, run!)
// https://editor.p5js.org/codingtrain/sketches/v3thq2uhk

class Unicorn {
  
    constructor() {
      this.r = 50;
      this.x = this.r;
      this.y = height - this.r;
      this.vy = 0;
      this.gravity = 2;
    }
  
    jump() {
      this.vy = -25;
    }

    move() {
      this.y += this.vy;
      this.vy += this.gravity;
      this.y = constrain(this.y, 0, height - this.r);
    }

    show() {
      image(uImg.this.x, this.y, this.r, this.r);
    }
  
  }