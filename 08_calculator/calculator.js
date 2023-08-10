const add = function(x, y) {
  return (x + y);
};

const subtract = function(x, y) {
	return (x - y);
};

const sum = function(someArray) {
	let answer = 0;
  for (n of someArray) {
    answer += n;
  }
  return answer;
};

const multiply = function(someArray) {
	let answer = 1;
  for (n of someArray) {
    answer *= n;
  }
  return answer;
};

const power = function(x, y) {
	return (x ** y);
};

const factorial = function(n) {
	let answer = 1;
  for (i = n; n > 0; n--) {
    answer *= n;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
