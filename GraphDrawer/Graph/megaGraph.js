var canvas = document.getElementById('canvas');
var canvasX = document.getElementById('canvasX');
var CanvasX = document.getElementById('canvasX');
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
var arrayN;
var golballines = "black";
var graphline = "blue";
var backcolor = "white";
//set numbers
function numb() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvasX.width = window.innerWidth;
  canvasX.height = window.innerHeight;
  CanvasX.width = window.innerWidth;
  CanvasX.height = window.innerHeight;
  let OX = (CanvasX.width)/2;
  let OY = (CanvasX.height)/2;
  let ConTextX = CanvasX.getContext("2d");
  var KY = OY;
  var KX = OX;
  var NKY = OY;
  var NKX = OX;
  var LX = (OX)/15;
  var KXP = OX+LX;
  var KYP = OY+LX+5;
  var NKXP = OX-LX;
  var NKYP = OY-LX;
  for (var i = 0; i < 15; i++) {
    ConTextX.moveTo(KX,OY-3);
    ConTextX.lineTo(KX,OY+3);
    ConTextX.lineWidth = 0.02;
    ConTextX.strokeStyle = golballines;
    ConTextX.stroke();

    ConTextX.moveTo(OX-3,KY);
    ConTextX.lineTo(OX+3,KY);
    ConTextX.lineWidth = 0.02;
    ConTextX.strokeStyle = golballines;
    ConTextX.stroke();

    ConTextX.moveTo(NKX,OY-3);
    ConTextX.lineTo(NKX,OY+3);
    ConTextX.lineWidth = 0.02;
    ConTextX.strokeStyle = golballines;
    ConTextX.stroke();

    ConTextX.moveTo(OX-3,NKY);
    ConTextX.lineTo(OX+3,NKY);
    ConTextX.lineWidth = 0.02;
    ConTextX.strokeStyle = golballines;
    ConTextX.stroke();

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
  functionX()
}
function functionX() {
  var input = document.getElementById('inputX').value;
  arrayP = input;
  arrayN = input;
  lenarray = arrayP.split("");
  for (var i = 0; i < lenarray.length; i++) {
    myarray01 = arrayP.replace("x^1/10", "Math.pow(i,1/10)");
    myarray02 = myarray01.replace("x^1/9", "Math.pow(i,1/9)");
    myarray03 = myarray02.replace("x^1/8", "Math.pow(i,1/8)");
    myarray04 = myarray03.replace("x^1/7", "Math.pow(i,1/7)");
    myarray05 = myarray04.replace("x^1/6", "Math.pow(i,1/6)");
    myarray06 = myarray05.replace("x^1/5", "Math.pow(i,1/5)");
    myarray07 = myarray06.replace("x^1/4", "Math.pow(i,1/4)");
    myarray08 = myarray07.replace("x^1/3", "Math.pow(i,1/3)");
    myarray09 = myarray08.replace("x^1/2", "Math.pow(i,1/2)");
    myarray10 = myarray09.replace("abs(x)", "Math.abs(i)");
    myarray11 = myarray10.replace("asin(x)", "Math.asin(i)");
    myarray12 = myarray11.replace("acos(x)", "Math.acos(i)");
    myarray13 = myarray12.replace("atan(x)", "Math.atan(i)");
    myarray14 = myarray13.replace("exp(x)", "Math.exp(i)");
    myarray15 = myarray14.replace("ln(x)", "Math.log(i)");
    myarray16 = myarray15.replace("ln(x)", "Math.log(i)");
    myarray17 = myarray16.replace("log(x)", "Math.log10(i)");
    myarray18 = myarray17.replace("log(x)", "Math.log10(i)");
    myarray19 = myarray18.replace("sin(x)", "Math.sin(i)");
    myarray20 = myarray19.replace("cos(x)", "Math.cos(i)");
    myarray21 = myarray20.replace("tan(x)", "Math.tan(i)");
    myarray22 = myarray21.replace("x^x", "Math.pow((i),(i))");
    myarray23 = myarray22.replace("x^10", "Math.pow(i,10)");
    myarray24 = myarray23.replace("x^9", "Math.pow(i,9)");
    myarray25 = myarray24.replace("x^8", "Math.pow(i,8)");
    myarray26 = myarray25.replace("x^7", "Math.pow(i,7)");
    myarray27 = myarray26.replace("x^6", "Math.pow(i,6)");
    myarray28 = myarray27.replace("x^5", "Math.pow(i,5)");
    myarray29 = myarray28.replace("x^4", "Math.pow(i,4)");
    myarray30 = myarray29.replace("x^3", "Math.pow(i,3)");
    arrayP = myarray30.replace("x^2", "Math.pow(i,2)");
  }
  for (var i = 0; i < lenarray.length; i++) {
    arrayP = arrayP.replace("x", "i");
  }
  for (var i = 0; i < lenarray.length; i++) {
    myarray01 = arrayN.replace("x^1/10", "Math.pow(-i,1/10)");
    myarray02 = myarray01.replace("x^1/9", "Math.pow(-i,1/9)");
    myarray03 = myarray02.replace("x^1/8", "Math.pow(-i,1/8)");
    myarray04 = myarray03.replace("x^1/7", "Math.pow(-i,1/7)");
    myarray05 = myarray04.replace("x^1/6", "Math.pow(-i,1/6)");
    myarray06 = myarray05.replace("x^1/5", "Math.pow(-i,1/5)");
    myarray07 = myarray06.replace("x^1/4", "Math.pow(-i,1/4)");
    myarray08 = myarray07.replace("x^1/3", "Math.pow(-i,1/3)");
    myarray09 = myarray08.replace("x^1/2", "Math.pow(-i,1/2)");
    myarray10 = myarray09.replace("abs(x)", "Math.abs(-i)");
    myarray11 = myarray10.replace("asin(x)", "Math.asin(-i)");
    myarray12 = myarray11.replace("acos(x)", "Math.acos(-i)");
    myarray13 = myarray12.replace("atan(x)", "Math.atan(-i)");
    myarray14 = myarray13.replace("exp(x)", "Math.exp(-i)");
    myarray15 = myarray14.replace("ln(x)", "Math.log(-i)");
    myarray16 = myarray15.replace("ln(x)", "Math.log(-i)");
    myarray17 = myarray16.replace("log(x)", "Math.log10(-i)");
    myarray18 = myarray17.replace("log(x)", "Math.log10(-i)");
    myarray19 = myarray18.replace("sin(x)", "Math.sin(-i)");
    myarray20 = myarray19.replace("cos(x)", "Math.cos(-i)");
    myarray21 = myarray20.replace("tan(x)", "Math.tan(-i)");
    myarray22 = myarray21.replace("x^x", "Math.pow((-i),(-i))");
    myarray22 = myarray21.replace("x^10", "Math.pow(-i,10)");
    myarray23 = myarray22.replace("x^9", "Math.pow(-i,9)");
    myarray24 = myarray23.replace("x^8", "Math.pow(-i,8)");
    myarray25 = myarray24.replace("x^7", "Math.pow(-i,7)");
    myarray26 = myarray25.replace("x^6", "Math.pow(-i,6)");
    myarray27 = myarray26.replace("x^5", "Math.pow(-i,5)");
    myarray28 = myarray27.replace("x^4", "Math.pow(-i,4)");
    myarray29 = myarray28.replace("x^3", "Math.pow(-i,3)");
    arrayN = myarray29.replace("x^2", "Math.pow(i,2)");
  }
  for (var i = 0; i < lenarray.length; i++) {
    arrayN = arrayN.replace("x", "-i");
  }
  for (var i = 0; i < longitod; i++) {
    Y[i] = eval(arrayP);
    X[i] = i;
    NY[i] = eval(arrayN);
    NX[i] = -i
    // Polinmal spicalfunction
  }
  arrayP=0;
  arrayN=0;
  play()
}
function play() {
  contexT = canvas.getContext("2d");
  var OX = (canvas.width)/2;
  var OY = (canvas.height)/2;
  var Ymodle = OY/(Yfactor);
  var Xmodle = OX/(Xfactor);
  ConText = canvasX.getContext("2d");
  for (var i = 0; i < longitod; i++) {
    Y[i] = (((Y[i]) * (Ymodle))*(-1))+OY;
    X[i] = ((X[i]) * (Xmodle))+OX;
    NY[i] = (((NY[i]) * (Ymodle))*(-1))+OY;
    NX[i] = ((NX[i]) * (Xmodle))+OX;
  }
  for (var i = 0; i < longitod; i++) {
    ConText.moveTo(0,OY);
    ConText.lineTo(canvas.width,OY);
    ConText.moveTo(OX,0);
    ConText.lineTo(OX,canvas.height);
    ConText.lineWidth = 0.01;
    ConText.strokeStyle = golballines;
    ConText.stroke();

    contexT.moveTo(X[i],Y[i]);
    contexT.lineTo(X[i+1],Y[i+1]);
    contexT.moveTo(NX[i],NY[i]);
    contexT.lineTo(NX[i+1],NY[i+1]);
    contexT.lineWidth = 0.1;
    contexT.strokeStyle = graphline;
    contexT.stroke();
    contexT.moveTo((canvas.width)*2,(canvas.height)*2);

  }
  for (var i = 0; i < longitod; i++) {
    Y[i] =0;
    X[i] =0;
    NY[i] =0;
    NX[i] =0;
  }
}
numb()
/*
var canvas = document.getElementById('canvas');
function play() {
  contexT = canvas.getContext("2d");
  var Y =[];
  var X =[];
  var Ymax = 262144;
  var Xmax = 512;
  var OX = (canvas.width)/2;
  var OY = (canvas.height)/2;
  var Ymodle = OY/(Ymax]);
  var Xmodle = OX/(Xmax)
  for (var i = 0; i < 512; i++) {
    Y[i] = Math.pow(i,2);
    X[i] = i;
  }
  for (var i = 0; i < 512; i++) {
    contexT.moveTo(X[i],Y[i]);
    contexT.lineTo(X[i+1],Y[i+1]);
    contexT.stroke();
  }
  console.log("on")
}
play()
*/
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
    document.getElementById('body').style.background = backcolor;
  }
  else if (backcolor=="black") {
    golballines = "black";
    backcolor = "white";
    document.getElementById('body').style.background = backcolor;
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
  numb( )
})
//test poly
/*
var array = "(x^1/10)+(x^7)";
lenarray = array.split("");
for (var i = 0; i < lenarray.length; i++) {
  myarray01 = array.replace("x^1/10", "Math.pow(i,1/10)");
  myarray02 = myarray01.replace("x^1/9", "Math.pow(i,1/9)");
  myarray03 = myarray02.replace("x^1/8", "Math.pow(i,1/8)");
  myarray04 = myarray03.replace("x^1/7", "Math.pow(i,1/7)");
  myarray05 = myarray04.replace("x^1/6", "Math.pow(i,1/6)");
  myarray06 = myarray05.replace("x^1/5", "Math.pow(i,1/5)");
  myarray07 = myarray06.replace("x^1/4", "Math.pow(i,1/4)");
  myarray08 = myarray07.replace("x^1/3", "Math.pow(i,1/3)");
  myarray09 = myarray08.replace("x^1/2", "Math.pow(i,1/2)");
  myarray10 = myarray09.replace("abs(x)", "Math.abs(i)");
  myarray11 = myarray10.replace("asin(x)", "Math.asin(i)");
  myarray12 = myarray11.replace("acos(x)", "Math.acos(i)");
  myarray13 = myarray12.replace("atan(x)", "Math.atan(i)");
  myarray14 = myarray13.replace("exp(x)", "Math.exp(i)");
  myarray15 = myarray14.replace("ln2(x)", "Math.ln2(i)");
  myarray16 = myarray15.replace("ln10(x)", "Math.ln10(i)");
  myarray17 = myarray16.replace("log(x)", "Math.log(i)");
  myarray18 = myarray17.replace("log10(x)", "Math.log10(i)");
  myarray19 = myarray18.replace("sin(x)", "Math.sin(i)");
  myarray20 = myarray19.replace("cos(x)", "Math.cos(i)");
  myarray21 = myarray20.replace("tan(x)", "Math.tan(i)");
  myarray22 = myarray21.replace("x^10", "Math.pow(i,10)");
  myarray23 = myarray22.replace("x^9", "Math.pow(i,9)");
  myarray24 = myarray23.replace("x^8", "Math.pow(i,8)");
  myarray25 = myarray24.replace("x^7", "Math.pow(i,7)");
  myarray26 = myarray25.replace("x^6", "Math.pow(i,6)");
  myarray27 = myarray26.replace("x^5", "Math.pow(i,5)");
  myarray28 = myarray27.replace("x^4", "Math.pow(i,4)");
  myarray29 = myarray28.replace("x^3", "Math.pow(i,3)");
  array = myarray29.replace("x^2", "Math.pow(i,2)");
}
for (var i = 0; i < lenarray.length; i++) {
  array = array.replace("x", "i");
}
var TestPOer = "Math.pow(i,2)";
alert(eval(TestPOer))
*/
