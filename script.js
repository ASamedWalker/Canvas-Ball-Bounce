// Drawing a circle on a canvas 
// var canvas = document.getElementById("myCanvas");
// var context = canvas.getContext("2d");

// context.fillStyle = "#0000ff";
// context.beginPath();
// context.arc(100, 100, 50, 0, 2*Math.PI);
// context.fill();

//Creating a function to draw additional circle in the canvas

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

function drawBall(x, y, r, color) {
  context.fillStyle = color;
  context.beginPath();
  context.arc(x,y,r,0,2*Math.PI);
  context.fill();
}

drawBall(50,50,30,"#ff0000");
drawBall(120,50,30,"#00ff00");
drawBall(190,50,30,"#0000ff");