let l;

function preload(){
  l = loadImage('dancingbaby2.gif')
}

function setup(){
  createCanvas(windowWidth, windowHeight)
  //background(255,0,205)
  //for (let i = 0; i < windowWidth || i < windowHeight ; i=i+20) {
    //line(i,0,i,windowHeight)
    //line(0,i,windowWidth,i)
  }

  //for (let i = 0; i < 13; i++) {
//    image(l, random(windowWidth), random(windowHeight),100,30)
//}



function draw(){
  background(255,0,205)
  for (let i = 0; i < windowWidth || i < windowHeight ; i=i+20) {
    line(i,0,i,windowHeight)
    line(0,i,windowWidth,i)
}
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
