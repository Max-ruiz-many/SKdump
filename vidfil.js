let can
let but
let playi = false
let vi


function setup(){
  can = createCanvas(windowWidth,windowHeight)
  can.style('z-index', '-1')
  vi = createVideo(['T1000Reforming.mp4'])
  vi.position(windowWidth/4,windowWidth/4)
  but = createButton('Play')
  but.position(10,35)
  but.mousePressed(tog)
}

function tog(){
  if (playi) {
    vi.pause()
    but.html('play')
  }
  else {
    vi.loop()
    but.html('pause')
  }
  playi = !playi
}

function draw(){
if (frameCount % 180 == 0) {
  //modulo timer
  vi.time(random(vi.duration()))  //
}//triggers every 3 seconds. 180 / 60 = 3

}
