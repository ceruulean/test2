"use strict"
/*
Auxiliary javascript functions
*/

function getDayName(int) {
    switch (int % 7) {
      case 0: 
        return "Sunday"
      case 1:
        return "Monday"
      case 2:
        return "Tuesday"
      case 3:
        return "Wednesday"
      case 4:
        return "Thursday"
      case 5:
        return "Friday"
      case 6:
        return "Saturday" 
    }
}

function hourTickerDecimal(num, conv) { // return a pretty string that shows the time. 1.5 = 1:30, etc.
  //conv is time display convention
  var hour = Math.floor(num);
  var decimalToMinutes = Math.round((num - hour) * 60); // get nearest integer minute
  var mm
if (decimalToMinutes == 0) {mm = "0"} // for string display

    if (conv == '12') {
      mm = (hour < 12)? mm+=' a.m.':mm+=' p.m.';
      (hour%12 == 0)? hour = 12: hour = hour%12;
      return hour+":"+decimalToMinutes+mm

    } else if (conv == '24') {
        return (hour%24)+":"+decimalToMinutes+mm
    } else {
      return hour+":"+decimalToMinutes+mm
    }
}


/*
function invertColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // http://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}
*/

export {getDayName, hourTickerDecimal}