var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

// lettre E et N
ctx.beginPath();
ctx.lineWidth = 5;
ctx.lineJoin="bevel"; // La jointure entre les lignes biseautée
ctx.moveTo(150,100); // un C
ctx.lineTo(50,100);
ctx.lineTo(50,300);
ctx.lineTo(150,300);
ctx.moveTo(50,200); // barre au milieu pour faire le E
ctx.lineTo(150,200);
ctx.moveTo(310,300); // N
ctx.lineTo(310,100);
ctx.lineTo(450,300);
ctx.lineTo(450,100);
ctx.stroke();

// 2
ctx.beginPath();
ctx.strokeStyle = "#EA4E1D";
ctx.lineWidth = 10;
ctx.moveTo(150,100);
ctx.quadraticCurveTo(500,-100,100,380);
ctx.moveTo(100,380);
ctx.quadraticCurveTo(250,350,250,360);
ctx.stroke();

// hexagone de haut en bas et gauche à droite
ctx.beginPath();
ctx.fillStyle = "#EBEBEB";
ctx.moveTo(500,100);
ctx.lineTo(490,110);
ctx.lineTo(490,120);
ctx.lineTo(500,130);
ctx.lineTo(510,120);
ctx.lineTo(510,110);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "#DBDADB";
ctx.moveTo(490,125);
ctx.lineTo(480,135);
ctx.lineTo(480,145);
ctx.lineTo(490,155);
ctx.lineTo(500,145);
ctx.lineTo(500,135);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "#595656";
ctx.moveTo(515,125);
ctx.lineTo(505,135);
ctx.lineTo(505,145);
ctx.lineTo(515,155);
ctx.lineTo(525,145);
ctx.lineTo(525,135);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "#EA4E1D";
ctx.moveTo(500,150);
ctx.lineTo(490,160);
ctx.lineTo(490,170);
ctx.lineTo(500,180);
ctx.lineTo(510,170);
ctx.lineTo(510,160);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "#878787";
ctx.moveTo(490,175);
ctx.lineTo(480,185);
ctx.lineTo(480,195);
ctx.lineTo(490,205);
ctx.lineTo(500,195);
ctx.lineTo(500,185);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "#EBEBEB";
ctx.moveTo(515,175);
ctx.lineTo(505,185);
ctx.lineTo(505,195);
ctx.lineTo(515,205);
ctx.lineTo(525,195);
ctx.lineTo(525,185);
ctx.fill();

// mini hexagone de gauche à droite
ctx.beginPath();
ctx.fillStyle = "#EBEBEB";
ctx.moveTo(535,135);
ctx.lineTo(530,140);
ctx.lineTo(530,145);
ctx.lineTo(535,150);
ctx.lineTo(540,145);
ctx.lineTo(540,140);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "#878787";
ctx.moveTo(540,150);
ctx.lineTo(535,155);
ctx.lineTo(535,160);
ctx.lineTo(540,165);
ctx.lineTo(545,160);
ctx.lineTo(545,155);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "#EA4E1D";
ctx.moveTo(555,135);
ctx.lineTo(550,140);
ctx.lineTo(550,145);
ctx.lineTo(555,150);
ctx.lineTo(560,145);
ctx.lineTo(560,140);
ctx.fill();

//texte
ctx.font = '20pt Calibri';
ctx.fillStyle = 'grey';
ctx.fillText('École du Numérique', 300, 360);
ctx.fillText('du Noyonnais', 290, 385);
