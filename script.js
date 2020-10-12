// Drawing a circle on a canvas 
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

context.fillStyle = "#0000ff";
context.beginPath();
context.arc(100, 100, 50, 0, 2*Math.PI);
context.fill();