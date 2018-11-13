var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(170,100);
ctx.lineTo(135,200);
ctx.closePath();
ctx.fillStyle = "peru";
ctx.fill();

ctx.beginPath(); // courbe quadrative
ctx.moveTo(100,100); // point de départ de la courbe (x, y)
ctx.quadraticCurveTo(145,20,170,100); // (coordonnées sommet courbure x, y, arrivée courbe x, y)
ctx.fillStyle = "brown";
ctx.fill();
