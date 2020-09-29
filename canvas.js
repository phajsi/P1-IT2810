var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// shape object
function Shape(x,y,arrayX=[],arrayY=[], fill=""){
  this.x=x;
  this.y=y;
  this.arrayX = arrayX;
  this.arrayY = arrayY;
  this.fill = fill;

  this.draw = function() {
    ctx.strokeStyle = "black";
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for(i=0; i<arrayX.length; i++){
      ctx.lineTo(arrayX[i], arrayY[i]);
    }
    ctx.fill();
    ctx.closePath();
    ctx.lineWidth=1.3;
    ctx.stroke();
    console.log("funker");
  }
}


//stone object
function Stone(x, dy, r){
  this.x = x;
  let y = -50;
  this.dy = dy;
  this.r = r;

  this.draw = function() {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2, false);
      ctx.fillStyle = "grey";
      ctx.strokeStyle = "lightgrey";
      ctx.stroke();
      ctx.fill();
      console.log("test");
      y += dy;
  }
}

//creates the stones to be animated
var stoneArray =[];

for (var i = 0; i<300; i++){
  var x=Math.random()*(canvas.width+50);
  var dy = (Math.random()*4)+1;
  var r = (Math.random()*5)+3;
  stoneArray.push(new Stone(x, dy, r))
}

//created the shapes to make the tower
var shape1a = new Shape(5, 203, [80, 225, 20], [203, 170, 170], "#857449" );
var shape1b = new Shape(80, 203, [230, 225], [203, 170], "#6A531D");
var shape2 = new Shape(25, 170, [220, 220, 200, 35], [170, 170, 145, 145], "#7B6C49");
var shape3 = new Shape(40, 145, [195, 194, 50], [145, 125, 127], "#B39358");
var shape4 = new Shape(55, 127, [185, 180, 60], [125, 107, 106], "#C4A773");
var shape5a = new Shape(100, 105, [170, 160, 110], [106, 75, 78], "#AA5D36");
var shape6b = new Shape(117, 77, [153, 150, 125], [75, 25, 25], "#B6875B");
var shape6a = new Shape(65, 105, [98, 100, 70], [105, 85, 83], "#C1A16E");
var shape7a = new Shape(73, 83, [105, 103, 78], [84, 60, 61], "#BFA16F");
var shape8a = new Shape(80, 60, [100, 98, 82], [59, 35, 37], "#CEAB70");
var lighning = new Shape(160, 0, [200, 180, 200, 140, 160, 150], [0,50, 46, 170, 55, 57], "yellow");

//draws the tower when the window loads
window.onload=function(){
  shape1a.draw();
  shape1b.draw();
  shape2.draw();
  shape3.draw();
  shape4.draw();
  shape5a.draw();
  shape6a.draw();
  shape6b.draw();
  shape7a.draw();
}

//animation funtion
function myAnimation(){
  requestAnimationFrame(myAnimation);
  ctx.clearRect(0,0,innerWidth, innerHeight);
  shape1a.draw();
  shape1b.draw();
  shape2.draw();
  shape3.draw();
  shape4.draw();
  shape5a.draw();
  shape6a.draw();
  shape6b.draw();
  shape7a.draw();
  lighning.draw();

  for (var i = 0; i<stoneArray.length; i++){
    stoneArray[i].draw();
  }
}

//SVG


// "circle" may be any tag name
var shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// Set any attributes as desired
shape.setAttribute("cx", 25);
shape.setAttribute("cy", 25);
shape.setAttribute("r",  20);
shape.setAttribute("fill", "green");
// Add to a parent node; document.documentElement should be the root svg element.
// Acquiring a parent element with document.getElementById() would be safest.
document.documentElement.appendChild(shape);
