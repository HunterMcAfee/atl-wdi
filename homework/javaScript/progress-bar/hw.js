// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    document.getElementById("numeric-display").innerHTML = timerValue;
  },
  drawProgressBars: function(timerValue){
   document.getElementsByClassName("progress-bar")[0].style.width = (100 - timerValue + "%");
  },
  drawLitFuses: function(timerValue){
    var burntWidth = timerValue / 100;
    document.getElementsByClassName("unburnt")[0].style.width = ((burntWidth * 98) + "%");
    document.getElementsByClassName("burnt")[0].style.width = (1 - burntWidth) * 98 + "%";
  },
  drawCrawlers: function(timerValue){

    document.getElementsByClassName("crawler")[0].style.marginLeft = ((100 - timerValue) * 10) + "px"; 
    if (timerValue % 2 ===  1) {
      document.getElementsByClassName("crawler")[0].style.marginTop = 10 + "px";
    } else {
      document.getElementsByClassName("crawler")[0].style.marginTop = 0 + "px";
    }
  }
};
