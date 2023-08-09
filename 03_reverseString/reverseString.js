const reverseString = function(text) {
  let reversedText = '';
  for (i = (text.length - 1); i >= 0; i--) {
    //trying so hard using negative index, turns out it doesnt work in js
    //just saw the solution, realized that my code was awful 
    reversedText += text[i];
  }
  return reversedText
};

// Do not edit below this line
module.exports = reverseString;
