var w = window.innerWidth;
var h = window.innerHeight;
var bubbleArray = [];
 
 
function Bubble(xloc, yloc, zloc, rise, rad) {
  this.xloc = xloc;
  this.yloc = yloc;
  this.zloc = zloc;
  this.rad = rad;
  this.rise = rise;
}

function CreateBubbles(howManyBubbles) {
  var count = howManyBubbles;
  for (i = 0; i < count; i++) {
    var x = random(0, w);
    var y = random(0, h);
    var z = random(0.3, 0.7);
    var r = map(z, 0.3, 0.7, 7, 25);
    var rise = map(z, 0.3, 0.7, 0.7, 1.7);
    var b = new Bubble(x, y, z, rise, r);
    bubbleArray.push(b);
  }
}

function Show() {
  for (i = 0; i < bubbleArray.length; i++) {
    var x = bubbleArray[i].xloc;
    var y = bubbleArray[i].yloc;
    var z = bubbleArray[i].zloc;
    var r = bubbleArray[i].rad;
    fill(255, 255, 255, z);
    ellipse(x, y, r, r);
  }
}

function Rise() {
  for (i = 0; i < bubbleArray.length; i++) {
    var x = bubbleArray[i].rise;
    bubbleArray[i].yloc -= x;
    var zmin = bubbleArray[i].zloc * -5;
    var zmax = bubbleArray[i].zloc * 5;
    var slowy = bubbleArray[i].yloc * .08;
    bubbleArray[i].xloc += map(cos(slowy), -1,1,zmin,zmax)
  }
}

function Edges() {
  for (i = 0; i < bubbleArray.length; i++) {
    if (bubbleArray[i].yloc < -10) {
      bubbleArray[i].yloc = h + 20;
    }
  }
}

function setup() {
  createCanvas(w, h);
  noStroke();
  CreateBubbles(200);
}

function draw() {
  colorMode(RGB, 255, 255, 255, 1);
  background(60, 195, 120, 1);
  Show();
  Rise();
  Edges();
}