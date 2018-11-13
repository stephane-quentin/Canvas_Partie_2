var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(50,50,300,300);

ctx.beginPath();
ctx.fillStyle = "white";
ctx.moveTo(160,180);
ctx.quadraticCurveTo(200,80,240,180);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "lightgrey";
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,130,300,200);
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,270,300,200);
ctx.fill();
