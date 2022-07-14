let k //vars needed for preload
let s
//let bubo = false //button variables
let bu
let c //stores canvas, needed for layering html items
let f //font
//bool list, needed to load the pages
let sdbool = false
let pthbool = false
let pgbool = false
function preload(){ //fine
  k = loadImage('Har.png')
  let s = minute()
  bu = createButton('Login')
  bu.hide()
  f = loadFont('04B_03__.TTF')
}

function setup(){
  c = createCanvas(windowWidth, windowHeight)
  imageMode(CENTER)
}

function sde(){
  background(128,128,128)
  //needed so that html buttons arent redrawn, pls member that this is part of draw. Perhaps it could be put into setup? Also after window sizing it redraws. Hiding button in setup could work but it would have to show it, negates noloop and window redraw
  //noLoop allows mousePressed to work, without page3 doesnt spawn in
  c.style('z-index', '-2')
  c.position(0,0)
  bu.show()
  bu.position(windowWidth/2,windowHeight/2)
  bu.mousePressed(page3)

}

function page3(){
  sdbool = false
   pthbool = true
  removeElements()
  background(254,90,47)
  textFont(f)
  textSize(35)
  text('The private forum is still up?', windowWidth/2, windowHeight/2)
  print(millis())
  if (millis > 20000) {
  page4()
  }
}

function page4(){
  let pthbool = false
  let pgbool = true
  background(128,128,128)
  textSize(12)
  text('\nFrom    Prof. Eiri Hello\nDate    30 Jan 1980 0:45:12\nSubject    Start Of a New Project\nThe site is broken again, I am thinking that someone (you dave) got one the Psy leads and general leads mixed up in the switch board.\nSeriously though, please fix this Dave. We just missed a test because of this same problem. Shape up before this lab goes under.', 0, 0)
}

function draw(){
  background(255,0,205)
  for (let i = 0; i < windowWidth || i < windowHeight; i=i+20) {
    textSize(20)
    text('I HATE THE ANTICHRIST', i, i)
    text('I HATE THE ANTICHRIST', 0,i)
  }
  image(k, windowWidth, windowHeight/2)
  image(k, windowWidth, windowHeight/2)

  if (millis() > 5900) {
    sdbool = true
  }
  if (sdbool === true) {
    sde()
  }
  if (pthbool === true) {
   page3()
  }
  if (pgbool === true) {
    page4()
  }
}

function windowResized(){
 resizeCanvas(windowWidth, windowHeight)
 //noLoop() doesnt stop the redrawing, where does this function even point to??
}
