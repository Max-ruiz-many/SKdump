//Pos of game obj
let xPos
let yPos
let ySp = 2
let xSp = 2
let md //calcs mouse distance frm img
let sc = 0 //score
let sdbl
let stgmbl = true
let wingmbl = false
let rot = 0

function preload(){
  a = loadImage('tux.jpg')
  sdbl = loadSound('Bloop.mp3')
}

function setup(){
  createCanvas(windowWidth,windowHeight)
xPos = random(windowWidth)
yPos = random(windowHeight)
textAlign(CENTER)
imageMode(CENTER)
}

function draw(){

if (stgmbl == true) {
  stgm()
}
if(wingmbl == true){
  wingm()
}

}

function stgm(){
  background(0,0,0)
  fill(255,0,0)
  textSize(40)
text("Score:" + sc,windowWidth/2, 50)
md = dist(mouseX,mouseY, xPos, yPos)
  image(a, xPos,yPos,30,30)
  xPos = xPos + xSp
  yPos = yPos + ySp
  //if (xPos >= windowWidth - 15 || xPos <= 0 || yPos >= windowHeight - 15 || yPos <= 0 ) {
  //  xSp = xSp * -1
  //  ySp = ySp * -1
  //}
  if (xPos >= windowWidth - 15 || xPos <= 0)
  {xSp = xSp * -1}
  if (yPos >= windowHeight - 15 || yPos <= 0 ) {
    ySp = ySp * -1
  }
if (md <= 20) {
  xPos = random(15, windowWidth-15)
  yPos = random(15, windowHeight-15)
  sc++
  xSp = xSp * 1.2
  ySp = ySp * 1.2
  sdbl.play()
  }
  if (sc >= 20) {
    stgmbl = false
    wingmbl = true
  }
}

function wingm(){
background(0,10,156)
fill(255,0,0)
textSize(40)
text("wan" ,windowWidth/2, 50)
rot++
push()
translate(windowWidth/2, windowHeight/2)
rotate(radians(rot))
image(a, 0,0, 100, 100)
pop()
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
