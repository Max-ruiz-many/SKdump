let k //vars needed for preload
let s
let bubo = false //button variables
let bu
let c //stores canvas, needed for layering html items
let f //font
//bool list, needed to load the pages
let sdbool = true
let pthbool = false
function preload(){
  k = loadImage('Har.png')
  let s = minute()
  bu = createButton('Login')
  bu.hide()
  f = loadFont('04B_03__.TTF')
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
  if ( millis() > 5900 ) {
    sde()
  }
  if (pthbool === true) {

  }
}

function sde(){//second page found after 5900 miliseconds or about a minute
background(128,128,128)
 //needed so that html buttons arent redrawn, pls member that this is part of draw. Perhaps it could be put into setup? Also after window sizing it redraws. Hiding button in setup could work but it would have to show it, negates noloop and window redraw
//noLoop allows mousePressed to work, without page3 doesnt spawn in
noLoop()
c.style('z-index', '-2')
c.position(0,0)
bu.show()
bu.position(windowWidth/2,windowHeight/2)
bu.mousePressed(page3)


}

function page3(){
  removeElements()
  background(254,90,47)
  textFont(f)
  textSize(35)
  text('The private forum is still up?', windowWidth/2, windowHeight/2)
  if (millis() > 11800) {
    background(0)
  }
}

function windowResized(){
 resizeCanvas(windowWidth, windowHeight)
 //noLoop() doesnt stop the redrawing, where does this function even point to??
}
