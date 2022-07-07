let lineBRB = false
let rectBRB = false
let circleBRB = false

function setup(){
  createCanvas(windowWidth, windowHeight)

  rectMode(CENTER)
  background(255,255,255)
}

function  draw(){

  keyTy()

  if (lineBRB == true) {
  lineBr()
  }

  if (rectBRB == true) {
  rectBr()
  }

}



function lineBr() //line brush function
  {  if(mouseIsPressed){
    strokeWeight(5)
    stroke(random(255), random(255), random(255))
    line(pmouseX,pmouseY,mouseX,mouseY)
  }
}

function rectBr()//rectangle Brushing
{
  if (mouseIsPressed) {
    stroke(random(255), random(255), random(255))
    fill(random(255), random(255), random(255))
    rect(mouseX,mouseY,50,50)
  }
}

function circleBr(){
  
}

function keyTy(){

  if (key === 'z') {
    lineBRB = true
    rectBRB = false
    circleBRB = false
  }
  if (key === 'x') {
    lineBRB = false
    rectBRB = true
    circleBRB = false
  }
  if (key ==='c') {
    lineBRB = false
    rectBRB = false
    circleBRB = true
  }
  if (key === 's') {
    save('drawing.jpg')
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
