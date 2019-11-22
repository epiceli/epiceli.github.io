// Super secret thing

let command = "not going to open";
let trump;
let singleMessageWidth;
let verticalSecretSpaceTop;
let verticalSecretSpaceBottom;
let horizontalSecretSpaceLeft;
let horizontalSecretSpaceRight; 
let message = "Secret Stuff!!!   ";

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  messageWidth = textWidth(message);
  trump = loadImage("assets/trump.jpg");
  verticalSecretSpaceTop = 12 * 30;
  verticalSecretSpaceBottom = 13 * 13;
  horizontalSecretSpaceLeft = 0;
  horizontalSecretSpaceRight = horizontalSecretSpaceLeft + messageWidth;
}

function draw() {
  background(220);

  if (command === "open sesame") {
    
    
    for (let x = 0; x < width; x += messageWidth) {
      for (let y = 0; y < height; y += 30) {
        color("red");
        text(message, x, y);
      }
    }
    imageMode(CENTER);
    image(trump, mouseX, mouseY);
  }
}


function mousePressed() {
  if (command === "open sesame") {
    if (mouseX > horizontalSecretSpaceLeft && mouseX < horizontalSecretSpaceRight &&
        mouseY > verticalSecretSpaceBottom && mouseY < verticalSecretSpaceTop) {
          message = "I am the King of the World!  ";
          messageWidth = textWidth(message);
        }
  }
}