let k
function preload(){
  k = loadImage('Har.png')
}

function setup(){
  createCanvas(windowWidth, windowHeight)
  imageMode(CENTER)
}

function draw(){
  background(255,0,205)
  for (let i = 0; i < windowWidth || i < windowHeight; i=i+20) {
    textSize(20)
    text('I HATE THE ANTICHRIST', i, i)
    text('I HATE THE ANTICHRIST', 0,i)
  }
  image(k, windowWidth, windowHeight/2)
}

function mouseClicked(){//second page found after mouse click
background(0,0,0)
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
