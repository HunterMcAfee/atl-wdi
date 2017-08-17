// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///

const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
// 1.  It increases the number of milliseconds by ten.
  this.millisecs += 10;
// 2.  If the number of milliseconds reaches 1000,
//   a.  it resets the number of milliseconds to zero.
//   b.  it increments the number of seconds.
  if (this.millisecs === 1000) {
    this.millisecs = 0;
    this.secs +=1
  }
// 3.  If the number of seconds reaches 60,
//   a.  it resets the number of seconds to zero.
//   b.  it increments the number of minutes.
  if (this.secs === 60) {
    this.secs = 0;
    this.mins +=1;
  }
  },
  reset: function(){
// 1.  It resets the counts of minutes, seconds, and milliseconds to zero.
  this.mins = 0;
  this.secs = 0;
  this.millisecs = 0;
// 2.  It resets the list of laps to be empty.
  this.laps = [];
  },
  start: function(){
// 1.  If the stopwatch is not running,
//   a. it sets the state of the stopwatch to 'running'.
//   b. it calls `tickClock` in order to start the ticking of the clock.
  if (this.isRunning === false) {
    this.isRunning = true;
    this.tickClock();
  } 
// 2.  If the stopwatch is running,
//   a. it does nothing.

  },
  stop: function(){
// 1.  If the stopwatch is running,
//   a. it sets the state of the stopwatch to 'not running'.
  if (this.isRunning === true) {
    this.isRunning = false;
  }
// 2.  If the stopwatch is not running,
//   a. it does nothing.

  },
  lap: function(){
// 1.  If the stopwatch is running,
//   a. it adds a record of the current values of minutes (`mins`), seconds
//      (`secs`), and milliseconds(`millisecs`) to the list of laps.
  if (this.isRunning === true) {
    this.laps.push(ViewHelpers.zeroFill(this.mins, 2) + ":" + ViewHelpers.zeroFill(this.secs, 2) + ":" + ViewHelpers.zeroFill(this.millisecs, 3));
  }
// 2.  If the stopwatch is not running,
//   a. it does nothing.
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
// 1.  It displays the values of minutes, seconds, and (tens of)
//     milliseconds elapsed in the DOM element with id `time-display`, in
//     the format `MM:SS:ss` (e.g. `100:01:34`, `05:01:10`), starting with
//     `00:00:00`.
  $("#mins").html(ViewHelpers.zeroFill(mins, 2));
  $("#secs").html(ViewHelpers.zeroFill(secs, 2));
  $("#millisecs").html(ViewHelpers.zeroFill(millisecs, 3));

// 2.  It pads the values of minutes, seconds, and (tens of) milliseconds
//     with zeros so that the strings are at least two characters long.
  },
  updateLapListDisplay: function(laps){
      var lapList = $('#lap-list');
      lapList.html("");
      for (var i = 0; i < laps.length; i++) {
        var newList = $('<li>');
         newList.html(laps[i])
        lapList.append(newList);
      }
    
// 1.  It displays the recorded laps inside the `lap-list` element,
//     representing each lap with an `<li>` element that displays the
//     lap's `mins`, `secs`, and `millisecs` values (zero-padded to be at
//     least two characters long, just like `time-display`).

  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
//  1.  If `number` has fewer digits than `length`,
//    a.  it should return a `number` as a string, padded on the left with
//        zeros until its length is equal to `length`
    var numberAsString = number;
    numberAsString = numberAsString.toString();
    var numberOfZeroes = length - numberAsString.length
    if (numberOfZeroes === 1) {
      numberAsString = "0" + numberAsString;
      return numberAsString;
    } else if (numberOfZeroes === 2) {
      numberAsString = "00" + numberAsString;
      return numberAsString;
    } else {
      return numberAsString;
    }
//  2.  If `number` does not have fewer digits than `length`,
//    a.  it should return `number` as a string, unaltered.
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
// 1.  It retrieves the current time values (mins, secs, millisecs) from `Stopwatch`.
// 2.  It calls `updateTimeDisplay` on `ViewEngine`.
  ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
  },
  handleClickStart: function() {
    if (Stopwatch.isRunning === false) {
      Stopwatch.start();
    }
// 1.  If the stopwatch is not running,
//   a.  it starts the stopwatch.
// 2.  If the stopwatch is already running,
//   b.  it does nothing.

  },
  handleClickStopReset: function() {
// 1.  If the stopwatch is running,
//   a. it stops the stopwatch.
  if (Stopwatch.isRunning) {
    Stopwatch.isRunning = false;
  } else if (Stopwatch.isRunning === false) {
    Stopwatch.reset();
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
    ViewEngine.updateLapListDisplay(Stopwatch.laps);
  }
// 2.  If the stopwatch is not running,
//   a. it resets the stopwatch.
//   b. it updates the time display so that it shows `00:00:00`.
//   c. it updates the lap list display so that it is empty.

  },
  handleClickLap: function(){
// 1.  If the stopwatch is running,
//   a.  it records a lap.
//   b.  it updates the display of laps.
  if (Stopwatch.isRunning) {
    Stopwatch.lap();
    ViewEngine.updateLapListDisplay(Stopwatch.laps);
  }
// 2.  If the stopwatch is not running,
//   a.  it does nothing.

  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
  $('#start').on('click', AppController.handleClickStart);
  $('#stop').on('click', AppController.handleClickStopReset);
  $('#lap').on('click', AppController.handleClickLap);
};
