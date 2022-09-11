var canvas = document.getElementById('canvas');
var canvasX = document.getElementById('canvasX');
var CanvasX = document.getElementById('canvasX');
var CanvasXXX = document.getElementById('CanvasX');
var Yfactor;
var Xfactor;
var longitod = 15;
var text = 1;
var textfactor = 1;
var textzoom=0;
var unite=1;
var ALexaS = 0;
var Y =[];
var X =[];
var NY =[];
var NX =[];
var arrayP;
var golballines = "black";
var graphline = "blue";
var backcolor = "white";
var elie;
//set numbers
function numb() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvasX.width = window.innerWidth;
  canvasX.height = window.innerHeight;
  CanvasX.width = window.innerWidth;
  CanvasX.height = window.innerHeight;
  CanvasXXX.width = window.innerWidth;
  CanvasXXX.height = window.innerHeight;
  let OX = (CanvasX.width)/2;
  let OY = (CanvasX.height)/2;
  let ConTextX = CanvasX.getContext("2d");
  ContrastXX = CanvasXXX.getContext("2d");
  var KY = OY;
  var KX = OX;
  var NKY = OY;
  var NKX = OX;
  var LX = (OX)/15;
  var KXP = OX+LX;
  var KYP = OY+LX;
  var NKXP = OX-LX;
  var NKYP = OY-LX;
  ConTextX.rect(0,0,canvas.wifth,canvas.height)
  ConTextX.sillStyle = backcolor
  ConTextX.fill()
  for (var i = 0; i < 15; i++) {
    ContrastXX.moveTo(KX,OY-3);
    ContrastXX.lineTo(KX,OY+3);
    ContrastXX.lineWidth = 0.02;
    ContrastXX.strokeStyle = golballines;
    ContrastXX.stroke();

    ContrastXX.moveTo(OX-3,KY);
    ContrastXX.lineTo(OX+3,KY);
    ContrastXX.lineWidth = 0.02;
    ContrastXX.strokeStyle = golballines;
    ContrastXX.stroke();

    ContrastXX.moveTo(NKX,OY-3);
    ContrastXX.lineTo(NKX,OY+3);
    ContrastXX.lineWidth = 0.02;
    ContrastXX.strokeStyle = golballines;
    ContrastXX.stroke();

    ContrastXX.moveTo(OX-3,NKY);
    ContrastXX.lineTo(OX+3,NKY);
    ContrastXX.lineWidth = 0.02;
    ContrastXX.strokeStyle = golballines;
    ContrastXX.stroke();

    ConTextX.fillStyle =golballines
    ConTextX.fillText(text,KXP,OY+17)
    ConTextX.fillStyle =golballines
    ConTextX.fillText("-"+text,NKXP,OY+17)
    ConTextX.fillStyle =golballines
    ConTextX.fillText("-"+text,OX+10,KYP)
    ConTextX.fillStyle =golballines
    ConTextX.fillText(text,OX+10,NKYP)


    KX = KX + LX;
    KY = KY + LX;
    NKX = NKX - LX;
    NKY = NKY - LX;

    KXP = KXP + LX;
    KYP = KYP + LX;
    NKXP = NKXP - LX;
    NKYP = NKYP - LX;
    text = text+textfactor;
  }
  if (ALexaS == 1) {
     text = unite + textzoom;
  }
  else if (ALexaS == 2) {
    text = unite - textzoom;
  }
  else {
    text = unite
  }
  //text = unite + textzoom;
  scale()
}
//scale
function scale() {
  let contexT = canvas.getContext("2d");
  let OX = (canvas.width)/2;
  let OY = (canvas.height)/2;
  let edge = longitod;
  pixel = longitod/OX;
  Yfactor = OY*pixel;
  Xfactor = longitod;
  functionXgiga()
}
function functionXgiga() {
  var gigagraphXS = document.getElementById('inputX').value;
  gigagraph = gigagraphXS.toLowerCase()
  arrayP = math.parse(gigagraph);
  eival = -1*longitod
  elie = longitod*10
  x=0
  for (var i = 0; i < elie; i++) {
    Y[i] = arrayP.evaluate({x:x});
    X[i] = x;
    NY[i] = arrayP.evaluate({x:-x});
    NX[i] = -x
    x=x+0.2;
    // Polinmal spicalfunction
  }
  play()
}
function play() {
  contexT = canvas.getContext("2d");
  var OX = (canvas.width)/2;
  var OY = (canvas.height)/2;
  var Ymodle = OY/(Yfactor);
  var Xmodle = OX/(Xfactor);
  ConText = canvasX.getContext("2d");
  ContrastXX = CanvasXXX.getContext("2d");
  for (var i = 0; i < elie; i++) {
    Y[i] = (((Y[i]) * (Ymodle))*(-1))+OY;
    X[i] = ((X[i]) * (Xmodle))+OX;
    NY[i] = (((NY[i]) * (Ymodle))*(-1))+OY;
    NX[i] = ((NX[i]) * (Xmodle))+OX;
  }
  for (var i = 0; i < elie; i++) {
    ContrastXX.moveTo(0,OY);
    ContrastXX.lineTo(canvas.width,OY);
    ContrastXX.moveTo(OX,0);
    ContrastXX.lineTo(OX,canvas.height);
    ContrastXX.lineWidth = 0.01;
    ContrastXX.strokeStyle = golballines;
    ContrastXX.stroke();

  }
  for (var i = 0; i < elie; i++) {

    ConText.moveTo(X[i],Y[i]);
    ConText.lineTo(X[i+1],Y[i+1]);
    ConText.moveTo(NX[i],NY[i]);
    ConText.lineTo(NX[i+1],NY[i+1]);
    ConText.lineWidth = 0.1;
    ConText.strokeStyle = graphline;
    ConText.stroke();

  }
  for (var i = 0; i < elie; i++) {
    Y[i] =0;
    X[i] =0;
    NY[i] =0;
    NX[i] =0;
  }
}
numb()
document.addEventListener('wheel', function functionName() {
  var y = event.deltaY;
  altitued(y)
})
function altitued(y) {
  contexT = canvas.getContext("2d");
  ConText = canvasX.getContext("2d");
  ConTextX = CanvasX.getContext("2d");
  contexT.clearRect(0, 0, canvas.width, canvas.height)
  ConText.clearRect(0, 0, canvas.width, canvas.height)
  ConTextX.clearRect(0, 0, canvas.width, canvas.height)
  if (y>0) {
    let YXZ = 1.2;
    textzoom = 0.5;
    longitod = longitod*YXZ;
    textfactor = (text+textzoom);
    text = text+textzoom;
    unite = text+textzoom;
    ALexaS = 1+1;
    numb()
  }
  else {
    if (text>0.5) {
      let YXZ = 0.83;
      textzoom = 0.5;
      longitod = longitod*YXZ;
      textfactor = (text-textzoom);
      text = text-textzoom;
      unite = text-textzoom;
      ALexaS =0.5+0.5;
    }
    numb()
  }
}

document.getElementById('SGC').addEventListener('click', function() {
  if (backcolor=="white") {
    golballines = "white";
    backcolor = "black";
    document.getElementById('graph-holder-giga').style.background = backcolor;
  }
  else if (backcolor=="black") {
    golballines = "black";
    backcolor = "white";
    document.getElementById('graph-holder-giga').style.background = backcolor;
  }
  numb()
})

document.getElementById('MNu').addEventListener('click', function() {
  var holder = document.getElementById('Help')
  if (holder.style.display=="block") {
    holder.style.display="none"
  }
  else {
    holder.style.display= "block"
  }
})

document.getElementById('BTN').addEventListener('click', function() {
  numb()
})
