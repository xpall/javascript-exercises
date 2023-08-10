const sumAll = function() {
  numArray = [];

// check if arguments are numbers
// if not, push to the array
for (i = 0; i < (arguments.length); i++) {
  if (typeof arguments[i] === 'number' && arguments[i] >= 1) {
    numArray.push(arguments[i]);
  } else {
    return 'ERROR';
  } 
}
  // Sum of Arithmetic Sequence Formula
  // S = ((n/2))(a + L) // n=totalDigits, a=firstTerm, L=lastTerm
  let sortednumArray = numArray.sort();
  let sum = (((sortednumArray[1] - sortednumArray[0]) + 1) / 2) 
            * (sortednumArray[0] + sortednumArray[1]);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
