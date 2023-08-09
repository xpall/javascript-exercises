const repeatString = function(text, repetition) {
  return checkRepetition(text, repetition)
};

function checkRepetition(text, repetition) {
  if (repetition >= 0) {  
    return repeatTextNTimes(text, repetition);  
  } else if (repetition < 0) {
    return 'ERROR';
  }
}

function repeatTextNTimes(text, repetition) {
  let repeatedText = '';
  for (i = +repetition; i > 0; i--) {
    // repeatedText = repeatedText.concat(text); //string is immutable
    repeatedText += text;
  }
  return repeatedText;
}

// Do not edit below this line
module.exports = repeatString;
