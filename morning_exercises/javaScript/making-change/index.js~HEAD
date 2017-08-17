// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
  var change = Math.round((payment - price) * 100);
  if (change <= 0) {
    console.log("No Change");
    return [0,0,0,0];
  }
  var quarter = Math.floor((change / 25));
  var dime = Math.floor((change % 25) / 10);
  var nickel = Math.floor(((change % 25) % 10) / 5);
  var penny = (((change % 25) % 10) % 5);
  return [quarter, dime, nickel, penny];
};

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
