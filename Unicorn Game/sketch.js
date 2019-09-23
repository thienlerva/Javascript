// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/147-chrome-dinosaur.html
// https://youtu.be/l0HoJHc-63Q

// Google Chrome Dinosaur Game (Unicorn, run!)
// https://editor.p5js.org/codingtrain/sketches/v3thq2uhk

let unicorn;
let uImg;
let tImg;
let bImg;

function preload() {
  uImg = loadImage("unicorn.png");
  tImg = loadImage("train.png");
  bImg = loadImage("background.jpg");
}
function setup() {
  createCanvas(600, 450);
  unicorn = new Unicorn();
}

function keyPressed() {
  if (key == ' ') {
    unicorn.jump();
  }
}

function draw() {
  background(bImg);
  unicorn.show();
  unicorn.move();
}