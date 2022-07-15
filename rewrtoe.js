let k //vars needed for preload
let s
//let bubo = false //button variables
let bu
let ema
let ems
let c //stores canvas, needed for layering html items
let f //font
let i //trying something
//bool list, needed to load the pages
let sdbool = false //2 page
let pthbool = false//third page
let pgbool = false//foruth
let pgf = false//fifth
let pgs = false//sixth
let pgse = false//seventh
let pgee = false//eight
let pgni = false//ninth
let pgte = false//tenth
let pgel = false//11

let errbool = false//error page
function preload(){ //fine
  k = loadImage('Har.png')
  let s = minute()

  f = loadFont('04B_03__.TTF')
}

function setup(){
  c = createCanvas(windowWidth, windowHeight)
  imageMode(CENTER)
  bu = createButton('Login')
  bu.hide()
  max = createButton('Next')
  max.hide()
  ems = createButton('Previous')
  ems.hide()
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

let timeval = 10

function page3(){
  sdbool = false
  pthbool = true
  bu.remove()
  //removeElements()
  background(254,90,47)
  textFont(f)
  textSize(35)
  text('Private Mailing archive, the last evidence of what we did', 0, windowHeight/2)
  for (let i = 0; i < 51; i++) {
    text('Things have gotten beyond our reach', random(windowWidth), random(windowHeight))
  }
  setInterval(timeIt, 6000)
  if (timeval == 0) {
    page4()
  }
}

function  timeIt()
{
  if (timeval > 0)
  {timeval--}
}

function page4(){
  let pthbool = false
  let pgbool = true
  background(128,128,128)
  textSize(12)
  c.style('z-index', '-1')
  c.position(0,0)
  text('\n\nFrom    Prof. Eiri \nDate    30 Jan 1980 0:45:12\nSubject    Pre-check error\nSomeone got the 25 Psy lead and 25 General lead mixed up again, Dave go to the switchboard before we lose all our funding. A major test is coming up and we must run checks tonight. Thank you.', 0, 0)
  max.show()
  max.position(0,0)
max.mousePressed(page5)
}

function page5(){
  let pgbool = false
  let pgf = true
  background(255,255,255)
}
function err0() {
  background(255,255,255)
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
  //removeElements()
    page3()
  }
  if (pgbool === true) {
    page4()
  }
  if (pgf === true) {
    page5()
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
  //noLoop() doesnt stop the redrawing, where does this function even point to??
}
