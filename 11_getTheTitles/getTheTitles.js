const getTheTitles = function(dict) {
  bookTitles = [];
  console.log(dict.length)
  for (books of dict) {
    bookTitles.push(books['title'])
  }
  return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
