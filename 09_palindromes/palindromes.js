const palindromes = function (someString) {
  return isPalindrome(cleanString(someString));
};

function cleanString(str) {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
}

function isPalindrome(fstr) {
  let reverseFstring = fstr.split('').reverse('').join('');
  return (fstr === reverseFstring);
}

// Do not edit below this line
module.exports = palindromes;
