function setup() {
  createCanvas(400, 400);
}

function preload() {
  soundFormats("wav");
  mySound = loadSound("catch.wav");
  mySound2 = loadSound("gameover.wav")

}

var cartX = 0
var cartSpeed = 4
var ballX = []
var ballY = 0
var ballSpeed = 0
var acceleration = 0.05
var i = 0


function draw() {
  background(220);

  ballX.push(random(50, 350))




  if (ballY > 400) {
    ballY = 0
    ballSpeed = 0

    i++
  }

  // if (i = i + 2) {
  //   acceleration = acceleration + 0.02
  //   cartSpeed = cartSpeed + 0.5
  // }

  noStroke()
  ellipse(ballX[i], ballY, 40)


  ballSpeed = ballSpeed + acceleration
  ballY = ballY + ballSpeed


  rect(cartX, height - 40, 90, 40)

  if (keyIsDown(RIGHT_ARROW)) {
    cartX = cartX + cartSpeed
  }

  if (keyIsDown(LEFT_ARROW)) {
    cartX = cartX - cartSpeed
  }

  if (ballY > 400) {
    if (cartX < ballX[i] < cartX + 90) {
      mySound.play()
    }
  }


  // if (ballY>400&&ballX[i]<cartX||ballX[i]>cartX+90) {
  //     textSize(20);
  //     text('Game over', 200, 200);
  // mySound2.play()
  //     noLoop();
  //   } 


}
