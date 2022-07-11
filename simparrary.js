let x = [];
let y = [];
let a;

function preload(){
  a = loadImage('tux.jpg')
}

function setup(){
  createCanvas(windowWidth, windowHeight)
  imageMode(CENTER)
  background(0,0,0)
}

function draw(){
  for(let i; i < x.length; i++){
  image(a, x[i], y[i], 30, 50)
    if (dist(mouseX,mouseY,x[i],y[i]) < 30) {
    x.splice(i,1)
    y.splice(i,1)
    }
  }
}

function keyPressed(){
  if (key === 'b') {
    x.push(random(windowWidth))
    y.push(random(windowHeight))
  }
}
//dont work lol
