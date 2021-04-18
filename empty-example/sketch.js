var x1,y1;
var x2,y2;
var x3,y3;
var x,y;

function setup() {
  frameRate(100);
  // put setup code here
  createCanvas(600,600);
  console.log('Sierpinski Triangle');

  //select three points on canvas, randomly
    x1 = random(600);
    y1 = random(600);
    x2 = random(600);
    y2 = random(600);
    x3 = random(600);
    y3 = random(600);
    //starting random point
    x = random(600);
    y = random(600);

    background(0);
    stroke(255);
    strokeWeight(4);
    point(x1, y1);
    point(x2, y2);
    point(x3, y3);
}

function draw() {
  stroke(255,0,0);
  point(x,y);
  var dice = floor(random(3));
  if(dice==0)
  {
    x = floor((x+x1)/2);
    y = floor((y+y1)/2);
  }
  else if (dice==1) {
    x = floor((x+x2)/2);
    y = floor((y+y2)/2);
  }
  else
  {
    x = floor((x+x3)/2);
    y = floor((y+y3)/2);
  }

}
