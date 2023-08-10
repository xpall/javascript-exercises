const removeFromArray = function() {
  let templateArray = Array.from(arguments[0]);
  let removeArray = [];
  for (let i = 1; i < (arguments.length); i++) {
    removeArray.push(arguments[i]);
  }
  // console.log(templateArray);
  // console.log(removeArray);
  finalArray = templateArray.filter(function(el) {
    return !removeArray.includes(el);
  });
  return finalArray;


// split any arguments to two groups (one for array, one for to-be-removed)
// loop through the array, for each element


}
// Do not edit below this line
module.exports = removeFromArray;
