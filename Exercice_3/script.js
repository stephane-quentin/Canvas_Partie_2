var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

//tête
ctx.beginPath();
ctx.fillStyle = "#9c7000";
ctx.beginPath();
ctx.arc(200,100,50,0,Math.PI*2,true); //arc(x, y, rayon, angle de départ, Math.PI demi-cercle *2 cercle entier, sens horaire du cercle(importe peu pour un cercle entier))
ctx.fill();

//bouche
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(175,115);
ctx.quadraticCurveTo(200,120,225,115);
ctx.moveTo(175,115);
ctx.quadraticCurveTo(200,130,225,115);
ctx.stroke();

//yeux
ctx.beginPath();
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(175,90,10,0,Math.PI*2,true); //arc(x, y, rayon, angle de départ, Math.PI demi-cercle *2 cercle entier, sens horaire du cercle(importe peu pour un cercle entier))
ctx.fill();
ctx.beginPath();
ctx.arc(225,90,10,0,Math.PI*2,true); //arc(x, y, rayon, angle de départ, Math.PI demi-cercle *2 cercle entier, sens horaire du cercle(importe peu pour un cercle entier))
ctx.fill();

//sourcil
ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(165,70);
ctx.quadraticCurveTo(175,60,185,70);
ctx.moveTo(215,70);
ctx.quadraticCurveTo(225,60,235,70);
ctx.stroke();

//bras
ctx.beginPath();
ctx.strokeStyle = "#9c7000";
ctx.lineWidth = 50;
ctx.lineCap = "round";
ctx.moveTo(50,160);
ctx.lineTo(350,160);
ctx.stroke(); //suite jambes
ctx.moveTo(170,160);
ctx.lineTo(170,375);
ctx.stroke();
ctx.moveTo(230,160);
ctx.lineTo(230,375);
ctx.stroke();

//suite du corps pour combler l'espace entre les jambes
ctx.fillStyle = "#9c7000";
ctx.fillRect(195,185,10,150);

//boutons violets
ctx.beginPath();
ctx.fillStyle = "purple";
ctx.beginPath();
ctx.arc(200,200,10,0,Math.PI*2,true); //arc(x, y, rayon, angle de départ, Math.PI demi-cercle *2 cercle entier, sens horaire du cercle(importe peu pour un cercle entier))
ctx.fill();
ctx.beginPath();
ctx.arc(200,250,10,0,Math.PI*2,true); //arc(x, y, rayon, angle de départ, Math.PI demi-cercle *2 cercle entier, sens horaire du cercle(importe peu pour un cercle entier))
ctx.fill();

//entrejambe arrondie
ctx.beginPath();
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(200,335,5,0,Math.PI*2,true); //arc(x, y, rayon, angle de départ, Math.PI demi-cercle *2 cercle entier, sens horaire du cercle(importe peu pour un cercle entier))
ctx.fill();
