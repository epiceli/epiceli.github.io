// Super secret thing

let command = "not going to open";
let trump;

function setup() {
  createCanvas(windowWidth, windowHeight);
  trump = loadImage("assets/trump.jpg");
}

function draw() {
  background(220);

  if (command === "open sesame") {
    textSize(32);
    let message = "Secret Stuff!!!   "
    for (let x = 0; x < width; x += textWidth(message)) {
      for (let y = 0; y < height; y += 30) {
        color("red");
        text(message, x, y);
      }
    }
    image(trump, 0, 0);
  }
}
