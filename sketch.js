var hr , mn,sc,hrAngle,mnAngle,scAngle



function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);
  hr=hour();
  hrAngle=map(hr%12,0,12,0,360);
  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(8);
  line(0,0,50,0);
  pop();
  stroke(255,0,255);
  point(0,0);
  strokeWeight(10);
  noFill();
  stroke(255,0,0);
  arc(0,0,260,260,0,hrAngle);
  mn=minute();
  mnAngle=map(mn,0,60,0,360);
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(6);
  line(0,0,100,0);
  pop();
  stroke(255,0,0);
  point(0,0);
  strokeWeight(10);
  noFill();
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);
  sc=second();
  scAngle=map(sc,0,60,0,360);
  push();
  rotate(scAngle);
  stroke(0,0,255);
  strokeWeight(4);
  line(0,0,120,0);
  pop();
  stroke(255,0,0);
  point(0,0);
  strokeWeight(10);
  noFill();
  stroke(0,0,255);
  arc(0,0,300,300,0,scAngle);
    
}