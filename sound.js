let can
let plybu
let mo
let mosl
let morb
let bm
let bx = 0
let amp
let lv

function preload(){
 mo = loadSound('ModemSound.mp3')
 bm = loadImage('dancingbaby2.gif')
}

function setup(){
can = createCanvas(windowWidth,windowHeight)
can.style('z-index', '-1')
can.position(0,0)
plybu = createButton('Play Audio')
plybu.mousePressed(audioToggle)
//plybu.position(20,20)
mosl = createSlider(0,1, 1, 0.01)
morb = createSlider(0,3,1,0.01)
background(0)
amp = new p5.Amplitude()
}


function audioToggle() {
if (!mo.isPlaying()) {
  mo.loop()
  plybu.html('Pause audio')
}
else {
  mo.pause()
    plybu.html('Play audio')

}
}

function draw(){
  background(0)
  mo.rate(morb.value())
  mo.setVolume(mosl.value())
  lv = amp.getLevel()
  let zs = map(lv, 0, 1, 0, 900)
  ellipse(width/2,height/2, zs, zs)
  image(bm, bx, height/2)
  bx = bx +2
  if (bx >= windowWidth) {
    bx = 0
  }
}
