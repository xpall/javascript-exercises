const convertToCelsius = function(temp) {
  let convertedTemp = ((5 / 9) *( temp - 32));
  let roundedOff = Math.round(convertedTemp * 10) / 10;
  return roundedOff;

};

const convertToFahrenheit = function(temp) {
  let convertedTemp = (((9 / 5) * temp) + 32);
  let roundedOff = Math.round(convertedTemp * 10)/10;
  return roundedOff;

};














// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
