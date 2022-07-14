let imga = [4]
let ranbu
let cv
let txa = [
  'test1',
  'test2',
  'test3',
  'test4',
  'spanish inquis'
]
let numb = 0
let bumb = 0
let fuont

function preload(){
  for (let i = 0; i < 4; i++) {
    if (i >= 3 ) {
      imga[i] = loadImage('tiger.png')
    }
      else {
        imga[i] = loadImage(i + '.jpg')
      }
  }
  fuont = loadFont('04B_03__.TTF')
}
function setup(){
  cv = createCanvas(windowWidth, windowHeight)
  cv.style('z-index', '-1')
  cv.position(0,0)
  ranbu = createButton('RanImg')
  ranbu.mousePressed(ranin)
  imageMode(CENTER)
}
function ranin(){
  bumb = int(random(imga.length))
  numb = int(random(txa.length))
}
function draw(){
background(90,180,128)
image(imga[bumb], windowWidth/2, windowHeight/2)
textFont(fuont)
textSize(40)
fill(200,30,100)
text(txa[numb], windowWidth/2, windowHeight/2)
}
