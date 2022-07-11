let cap
let x = 0
let w
let h
function setup(){
  createCanvas(800,240)
  cap = createCapture(VIDEO)
  cap.size(320,240)
}

function draw(){
  w = cap.width
  h = cap.height
  copy(cap, w/2, 0, 1, h, x, 0,1,h)
  x++
  if(x>= width)
  {x = 0}
  //image(cap,0,0)
  filter(THRESHOLD)
}
