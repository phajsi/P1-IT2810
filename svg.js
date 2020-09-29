
//stone object
var k=0
function StoneSVG(r, cx){
  this.r=r;
  this.cx=cx;
  let cy= -30;

  this.draw=function(){
    let stone = document.createElementNS("http://www.w3.org/2000/svg","circle");

    $(stone).attr("r", r);
    $(stone).attr("cx", cx);
    $(stone).attr("cy", cy);
    $(stone).attr("fill", "grey");
    $(stone).attr("stroke", "white");
    svg.appendChild(stone);
    $(stone).attr("id", "stone"+k);
    k++;
}}

//creates and draws the stones used for the animation
let stoneArraySVG=[];

for (var i = 0; i<300; i++){
  var cx=Math.random()*(300);
  var dy = (Math.random()*4)+1;
  var r = (Math.random()*5)+3;
  stoneArraySVG.push(new StoneSVG(r, cx))
}

function drawStones(){
  for (var i = 0; i<stoneArraySVG.length; i++){
    stoneArraySVG[i].draw();
  }
}

//animation
function animateStones(){
  let dur= 2000;
  for (var i = 0; i<stoneArraySVG.length; i++){
  dur = Math.random()*(2500)+1500;
  $('#stone'+i).animate(
      {'foo':260},
      {
          step: function(foo){
              $(this).attr('cy', foo);
          },
          duration: dur
      });
  }
}

  drawStones();
