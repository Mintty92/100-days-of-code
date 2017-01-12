var w = 1200;
var h = 300;


function Bubble (xloc, yloc, zloc, rise) {
  this.xloc = xloc;
  this.yloc = yloc;
  this.zloc = zloc;
  this.rise = rise;
}

var bubbleArray = [];

function CreateBubbles (howManyBubbles) {
  var count = howManyBubbles;
  for (i = 0; i < count; i++) {
    var x = random(0 ,w);
    var y = h - 10;
    var z = .5;
    var rise = random(.7 , 3);
    var b = new Bubble(x,y,z,rise);
    bubbleArray.push(b);
  }
}

function Show () {
  for (i = 0; i < bubbleArray.length; i++){
    var x = bubbleArray[i].xloc;
    var y = bubbleArray[i].yloc;
    var r = bubbleArray[i].zloc * random(10);
    ellipse(x, y, r, r);
  }
}

function Rise () {
  for (i = 0; i < bubbleArray.length; i++) {
     bubbleArray[i].yloc -= bubbleArray[i].rise;
  }
}

function Edges () {
  for (i = 0; i <bubbleArray.length; i++) {
    if (bubbleArray[i].yloc < 0) {
      bubbleArray[i].yloc = 320;
    }
  }
}


function setup() {
  createCanvas(w,h);
  
  CreateBubbles(100);
  
}

function draw() {
  background(0);
  Show();
  Rise();
  Edges();
}


