function setup() {
  createCanvas(1000, 1000);
  noCursor();
}

function draw() {
  background(29, 76, 179);
  let y =  millis();
  text(y, 5, 50);
  fill(12, 89, 16);
  rect(00, 900, 1200, 800);
  noFill();
  fill(240, 214, 17);
  circle(1000, 0, 250);
  noFill();
  fill(random(255), random(255), random(255), random(255));
  rect(800, 500, 60, 400);
  noFill();
  fill(156, 227, 64);
  rect(500, 500, 500, 30);
  rect(600, 450, 400, 50);
  rect(700, 500, 40, 100);
  rect(900, 500, 60, 150);
  rect(550, 500, 30, 106);
  noFill();
  fill(227, 167, 64);
  rect(175, 500, 150, 400);
  ellipse(250,500,150, 150);
  triangle(00, 900, 350, 900, 00, 1200);
  arc(250, 900, 150, 100, 0, PI);
  noFill();
  fill(140, 84, 10);
  quad(325, 500, 250, 575, 175, 500, 250, 425);
  noFill();
  fill(0,0,0);
  square(500, 300, 50);
  noFill();
  fill(150, 109, 56);
  rect(300, 30, 40, 200);
  arc(320, 150, 200, 500, 0, PI);
  noFill();
  fill(35, 153, 108);
  text('Dredelel', 300, 250)
  noFill();
  fill(17, 240, 214);
  rect(mouseX, mouseY, 40, 40, 40, 40);
    noFill();
  fill(0,0,0);
  square(500, 300, 50)

  let img = createImg(
    'https://www.gentoo.org/assets/img/logo/gentoo-typo.svg',
  );
  img.position(100, 25);

}
