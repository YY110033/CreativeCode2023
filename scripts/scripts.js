function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  background(220);
  
  strokeWeight(2);
  
  circle(60, 40, 20);
  circle(30, 178, 20);
  circle(180, 24, 20);
  circle(77, 100, 20);
  circle(140, 360, 20);
  circle(120, 300, 20);
  circle(240, 260, 20);
  circle(180, 200, 20);
  circle(333, 390, 20);
  circle(365, 240, 20);
  circle(270, 40, 20);
  circle(340, 100, 20);
  circle(350, 280, 20);
  circle(250, 350, 20);
  circle(360, 30, 20);
  circle(40, 330, 20);
  circle(50, 260, 20);
  
  //rect(380,20,10,360);
 
  
  if (mouseY < 100){
    mouseY = 100;
  }
  if (mouseY > 430){
    mouseY = 430;
  }
  
  scale( 1, mouseY / 400);
  let n = mouseX/20;//number of sides of the polygon
  if(n<6){
    n = 3;
  }
  
  //n = 6;
  polygon(200, 200, 150, n);
  
  //let n = 7;
  //polygon(200, 200, 150, n);
  
  function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
  let eyePosition = 180 - mouseX/15;
  line(160, eyePosition, 160, eyePosition+40);//left eye
  line(240, eyePosition, 240, eyePosition+40);//right eye
  
  let smileSize = mouseX/12;
  arc(width/2, 230, 50, smileSize, 0, PI);
  

  
}