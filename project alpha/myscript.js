if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   location.href='tophone.html';
}
var x = setInterval(function() {
var now = new Date().getTime();
var distance = 24 - now;
var hours =Math.abs( Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
var minutes =Math.abs(( Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))+1);
var seconds = Math.abs((Math.floor((distance % (1000 * 60)) / 1000))+1);
if (hours == 24) {
  hours = 00;
    if (minutes<10) {
      if (seconds<10) {
        document.getElementById("jackie").innerHTML ="0" + hours + " : "
        + "0" + minutes + " : " + "0" + seconds ;
      }
      else {
        document.getElementById("jackie").innerHTML ="0" + hours + " : "
        + "0" + minutes + " : " + seconds ;
      }
    }
    else {
      if (seconds<10) {
        document.getElementById("jackie").innerHTML ="0" + hours + " : "
        + minutes + " : " + "0" + seconds ;
      }
      else {
        document.getElementById("jackie").innerHTML ="0" + hours + " : "
        +  minutes + " : " + seconds ;
      }
    }
  }
else {
  if (hours <10) {
    if (minutes<10) {
      if (seconds<10) {
        document.getElementById("jackie").innerHTML ="0" + hours + " : "
        + "0" + minutes + " : " + "0" + seconds ;
      }
      else {
        document.getElementById("jackie").innerHTML ="0" + hours + " : "
        + "0" + minutes + " : " + seconds ;
      }
    }
    else {
      if (seconds<10) {
        document.getElementById("jackie").innerHTML ="0" + hours + " : "
        + minutes + " : " + "0" + seconds ;
      }
      else {
        document.getElementById("jackie").innerHTML ="0" + hours + " : "
        +  minutes + " : " + seconds ;
      }
    }
  }
  else if (hours>10) {
    if (minutes<10) {
      if (seconds<10) {
        document.getElementById("jackie").innerHTML = hours + " : 0" + minutes + " : 0" + seconds ;
      }
      else {
        document.getElementById("jackie").innerHTML = hours + " : 0" + minutes + " : " + seconds ;
      }
    }
    else {
      if (seconds<10) {
        document.getElementById("jackie").innerHTML = hours + " : " + minutes + " : " + "0" + seconds ;
      }
      else {
        document.getElementById("jackie").innerHTML = hours + " : " +  minutes + " : " + seconds ;
      }
    }
  }
}
}, 1000);
  function aa() {
    var butt =document.getElementById('butt1');
    var mun =document.getElementById('mun1');
    if (mun.style.display == "block") {
      mun.style.display = "none";
      butt.style.display = "block";
    }
    else if (mun.style.display == "none") {
      mun.style.display = "block";
      butt.style.display = "none";
    }
  }
  function ab() {
    var length = window.history.length;
    var I = Number(document.getElementById('I').value);
    var Y = Number(document.getElementById('Y').value);
    if (I > 1) {
          window.history.back();
          I=I-1;
          document.getElementById('I').value= I;
      }
      else if (I == 1) {
        document.getElementById('bot2').disabled = true;
        window.history.back();
        I=I-1;
        document.getElementById('I').value= I;
      }
      else {
        window.history.back();
        I=length-1;
        document.getElementById('I').value= I;
        document.getElementById('check2').click();
      }
      Y=Y+1;
      document.getElementById('bot01').disabled = false;
      document.getElementById('Y').value= Y;
  }
  function ac() {
    var Y = Number(document.getElementById('Y').value);
    var I = Number(document.getElementById('I').value);
    window.history.forward()
    Y=Y-1;
    if (Y == 0) {
      document.getElementById('bot01').disabled = true;
      document.getElementById('Y').value = Y;
    }
    else {
      document.getElementById('bot01').disabled = false;
      document.getElementById('Y').value = Y;
    }
    I=I+1;
    document.getElementById('bot2').disabled = false;
    document.getElementById('I').value = I;
  }
  function check() {
    var I = Number(document.getElementById('I').value);
    if (I==0){
      I=I+1;
      document.getElementById('I').value= I;
    }
    else {
      I=I+1;
      document.getElementById('I').value= I;
    }

    if (I >= 1) {
      document.getElementById('bot2').disabled = false;
    }
    else {
      document.getElementById('bot2').disabled = true;
    }
  }
  function check2() {
    var I = Number(document.getElementById('I').value);
    if (I >= 1) {
      document.getElementById('bot2').disabled = false;
    }
    else {
      document.getElementById('bot2').disabled = true;
    }
  }

  function aab() {
    var on2mm = document.getElementById('2master');
    var on1er = document.getElementById('1master');
    var on3em = document.getElementById('3em');
    var on2em = document.getElementById('2em');
    if (on2em.style.display=="none") {
      on2em.style.display= "block";
      on1er.style.display= "none";
      on3em.style.display= "none";
      on2mm.style.display= "none";
      document.getElementById('hide').click();
    }
    else {
      on2em.style.display= "none";
      on1er.style.display= "none";
      on3em.style.display= "none";
      on2mm.style.display= "none";
      document.getElementById('hide').click();
    }
  }
  function aba() {
    var ons3 = document.getElementById('2s3');
    var ons4 = document.getElementById('2s4');
    document.getElementById('2ems1').disabled = true;
    document.getElementById('2ems2').disabled = false;
    ons3.style.display = "block";
    ons4.style.display = "none";
  }
  function ab1() {
    var ons3 = document.getElementById('2s3');
    var ons4 = document.getElementById('2s4');
    document.getElementById('2ems1').disabled = false;
    document.getElementById('2ems2').disabled = true;
    ons3.style.display = "none";
    ons4.style.display = "block";
  }

  function aac() {
    var on2mm = document.getElementById('2master');
    var on1er = document.getElementById('1master');
    var on3em = document.getElementById('3em');
    var on2em = document.getElementById('2em');
    if (on3em.style.display=="none") {
      on3em.style.display= "block";
      on2mm.style.display= "none";
      on1er.style.display= "none";
      on2em.style.display= "none";
    }
    else {
      on2mm.style.display= "none";
      on1er.style.display= "none";
      on3em.style.display= "none";
      on2em.style.display= "none";
    }
    document.getElementById('hide').click();
  }
  function aca() {
    var ons5 = document.getElementById('3s5');
    var ons6 = document.getElementById('3s6');
    document.getElementById('3ems5').disabled = true;
    document.getElementById('3ems6').disabled = false;
    ons5.style.display = "block";
    ons6.style.display = "none";
  }
  function ac1() {
    var ons5 = document.getElementById('3s5');
    var ons6 = document.getElementById('3s6');
    document.getElementById('3ems5').disabled = false;
    document.getElementById('3ems6').disabled = true;
    ons5.style.display = "none";
    ons6.style.display = "block";
  }

  function aad() {
    var on2mm = document.getElementById('2master');
    var on1er = document.getElementById('1master');
    var on3em = document.getElementById('3em');
    var on2em = document.getElementById('2em');
    if (on1er.style.display=="none") {
      on1er.style.display= "block";
      on2mm.style.display= "none";
      on3em.style.display= "none";
      on2em.style.display= "none";
    }
    else {
      on2mm.style.display= "none";
      on1er.style.display= "none";
      on3em.style.display= "none";
      on2em.style.display= "none";
    }
    document.getElementById('hide').click();
  }
  function ada() {
    var ont1 = document.getElementById('1ertr1');
    var ont2 = document.getElementById('1ertr2');
    document.getElementById('1ert1').disabled = true;
    document.getElementById('2emt2').disabled = false;
    ont1.style.display = "block";
    ont2.style.display = "none";
  }
  function ad1() {
    var ont1 = document.getElementById('1ertr1');
    var ont2 = document.getElementById('1ertr2');
    document.getElementById('1ert1').disabled = false;
    document.getElementById('2emt2').disabled = true;
    ont1.style.display = "none";
    ont2.style.display = "block";
  }

  function aae() {
    var on2mm = document.getElementById('2master');
    var on1er = document.getElementById('1master');
    var on3em = document.getElementById('3em');
    var on2em = document.getElementById('2em');
    if (on2mm.style.display=="none") {
      on2mm.style.display= "block";
      on1er.style.display= "none";
      on3em.style.display= "none";
      on2em.style.display= "none";
      document.getElementById('hide').click();
    }
    else {
      on2mm.style.display= "none";
      on1er.style.display= "none";
      on3em.style.display= "none";
      on2em.style.display= "none";
      document.getElementById('hide').click();
    }

  }
  function aea() {
    var ont3 = document.getElementById('2mmt3');
    var m2m1 = document.getElementById('2m1');
    var m2m2 = document.getElementById('2m2');
    if (ont3.style.display=="none") {
      ont3.style.display="block"
      m2m2.style.display="block"
      m2m1.style.display="none"
    }
    else {
      ont3.style.display="none"
      m2m2.style.display="none"
      m2m1.style.display="block"
    }
  }

  function hide() {
      var ons3 = document.getElementById('2s3');
      var ons4 = document.getElementById('2s4');
      var on2mm = document.getElementById('2master');
      var on1er = document.getElementById('1master');
      var on3em = document.getElementById('3em');
      var on2em = document.getElementById('2em');
      var ons5 = document.getElementById('3s5');
      var ons6 = document.getElementById('3s6');
      var ont3 = document.getElementById('2mmt3');
      var m2m1 = document.getElementById('2m1');
      var m2m2 = document.getElementById('2m2');
      var ont1 = document.getElementById('1ertr1');
      var ont2 = document.getElementById('1ertr2');
      var menu = document.getElementById('mun1');
      if (on2em.style.display=="none") {
        document.getElementById('2ems1').disabled = false;
        document.getElementById('2ems2').disabled = false;
        ons3.style.display = "none";
        ons4.style.display = "none";
        } else {
        // do nothing
      }
      if (on3em.style.display=="none") {
        document.getElementById('3ems5').disabled = false;
        document.getElementById('3ems6').disabled = false;
        ons5.style.display = "none";
        ons6.style.display = "none";
        }else {
        // do nothing
      }
      if (on1er.style.display=="none") {
        document.getElementById('1ert1').disabled = false;
        document.getElementById('2emt2').disabled = false;
        ont1.style.display = "none";
        ont2.style.display = "none";
        } else {
          // do nothing
      }
      if (ont3.style.display=="block") {
        ont3.style.display="none"
        m2m2.style.display="none"
        m2m1.style.display="block"
        } else {
        // do nothing
      }
      if (menu.style.display=="none") {
        document.getElementById('2ems1').disabled = false;
        document.getElementById('2ems2').disabled = false;
        ons3.style.display = "none";
        ons4.style.display = "none";
        document.getElementById('3ems5').disabled = false;
        document.getElementById('3ems6').disabled = false;
        ons5.style.display = "none";
        ons6.style.display = "none";
        document.getElementById('1ert1').disabled = false;
        document.getElementById('2emt2').disabled = false;
        ont1.style.display = "none";
        ont2.style.display = "none";
        ont3.style.display="none";
        m2m2.style.display="none";
        m2m1.style.display="block";
        on2em.style.display="none";
        on2mm.style.display="none";
        on3em.style.display="none";
        on1er.style.display="none";
        } else {
        // do nothing
      }
      }

  function b01() {
    document.getElementById('b01').click();
  }
  function b02() {
    document.getElementById('b02').click();
  }
  function b03() {
    document.getElementById('b03').click();
  }
  function b04() {
    document.getElementById('b04').click();
  }
  function b05() {
    document.getElementById('b05').click();
  }
  function b06() {
    document.getElementById('b06').click();
  }
  function b07() {
    document.getElementById('b07').click();
  }
  function b08() {
    document.getElementById('b08').click();
  }

  function b09() {
    document.getElementById('b09').click();
  }
  function b10() {
    document.getElementById('b10').click();
  }
  function b11() {
    document.getElementById('b11').click();
  }
  function b12() {
    document.getElementById('b12').click();
  }
  function b13() {
    document.getElementById('b13').click();
  }
  function b14() {
    document.getElementById('b14').click();
  }
  function b15() {
    document.getElementById('b15').click();
  }
  function b16() {
    document.getElementById('b16').click();
  }

  function b17() {
    document.getElementById('b17').click();
  }
  function b18() {
    document.getElementById('b18').click();
  }
  function b19() {
    document.getElementById('b19').click();
  }
  function b20() {
    document.getElementById('b20').click();
  }
  function b21() {
    document.getElementById('b21').click();
  }
  function b22() {
    document.getElementById('b22').click();
  }
  function b23() {
    document.getElementById('b23').click();
  }
  function b24() {
    document.getElementById('b24').click();
  }
  function b25() {
    document.getElementById('b25').click();
  }
  function b26() {
    document.getElementById('b26').click();
  }
  function b27() {
    document.getElementById('b27').click();
  }
  function b28() {
    document.getElementById('b28').click();
  }

  function b29() {
    document.getElementById('b29').click();
  }
  function b30() {
    document.getElementById('b30').click();
  }
  function b31() {
    document.getElementById('b31').click();
  }
  function b32() {
    document.getElementById('b32').click();
  }
  function b33() {
    document.getElementById('b33').click();
  }
  function b34() {
    document.getElementById('b34').click();
  }
