let k //vars needed for preload
let s
let bubo = false //button variables
let bu
let c //stores canvas, needed for layering html items
function preload(){
  k = loadImage('Har.png')
  let s = minute()
}

function setup(){
  c = createCanvas(windowWidth, windowHeight)
  imageMode(CENTER)
  textAlign(CENTER)
}

function draw(){
  background(255,0,205)
  for (let i = 0; i < windowWidth || i < windowHeight; i=i+20) {
    textSize(20)
    text('I HATE THE ANTICHRIST', i, i)
    text('I HATE THE ANTICHRIST', 0,i)
  }
  image(k, windowWidth, windowHeight/2)
  print(s)
  if ( millis() > 5900) {
    sde()
  }
}

function sde(){//second page found after 5900 miliseconds or about a minute
background(128,128,128)
noLoop() //needed so that html buttons arent redrawn, pls member that this is part of draw. Perhaps it could be put into setup? Also after window sizing it redraws.
c.style('z-index', '-2')
c.position(0,0)

bu = createButton('Login')
bu.position(windowWidth/2,windowHeight/2)
bu.mousePressed(page3)

//noLoop()

}

function page3(){
  removeElements()
  background(254,90,47)
  textSize(35)
  text('The private forum is still up?', windowWidth/2, windowHeight/2)
}
function windowResized(){
 resizeCanvas(windowWidth, windowHeight)
 //noLoop() doesnt stop the redrawing, where does this function even point to??
}
