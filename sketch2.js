let ballX = 200
let ballY = 200
let ballD = 50
let i ;

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0,0,0)
  imageMode(CENTER)


}

function preload(){
  i = loadImage('Har.png')
  k = loadImage('dancingbaby2.gif')
}

function draw() {

  noCursor()
  //all these background stuff changes the background color from quad to quad
  if(mouseX > windowWidth/2 && mouseY > windowHeight/2)
  {background(255,0,0)}
  else if (mouseX > windowWidth/2 && mouseY < windowHeight/2) {
    background(0,0,255)
  }
  else if (mouseX < windowWidth/2 && mouseY > windowHeight/2) {
    background(0,0,0)
  }
  else {
    background(0,255,0)
  }
    ellipse(ballX,ballY,ballD,ballD)
  if (mouseIsPressed == true) {
    ballX = windowWidth/2
    ballY = windowHeight/2
    ballD = 200
  }
  else {
    ballX = 200
    ballY = 200
    ballD = 50
  }
  textSize(30)
  text('lol', windowWidth/3, windowHeight/2)
if (mouseIsPressed == true) {
  image(i, windowWidth/2, windowHeight/2)
 }
 else {
 }
 image(k, mouseX, mouseY)
}


//
function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
