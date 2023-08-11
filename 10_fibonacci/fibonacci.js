const fibonacci = function(n) {
  if (isValidNumber(n) === true) {
    return fibonacciTotal(n);
  } else {
    return 'OOPS'
  }
  
function isValidNumber(n) {
  return (n >= 0);
}

function fibonacciTotal(x){
  const fibonacciStart = [1, 1]
  for (i = 2; i < x; i++) {
    let lastTwoDigits = [fibonacciStart[(fibonacciStart.length - 1)], 
                        fibonacciStart[(fibonacciStart.length - 2)]];
    fibonacciStart.push(lastTwoDigits[0] + lastTwoDigits[1]);
  } return fibonacciStart.pop();
}
};

// Do not edit below this line
module.exports = fibonacci;
