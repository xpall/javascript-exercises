const leapYears = function(year) {
  return isLeapYear(year);
};

function isLeapYear(yyyy) {
// divisible by 4 is a leap year
// unless it is divisible by 100 not a leap year
// except divisible by 400
  if (yyyy % 400 === 0 || yyyy % 100 != 0 && yyyy % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
