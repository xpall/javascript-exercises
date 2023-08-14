const findTheOldest = function(peopleArray) {
  return appendAge(peopleArray);
};

// update array (add age, take note of people that are still living)
function appendAge(someArray) {
  let currentYear = 2023;
  oldestPerson = {name: '', age: 0};
  for (i = 0; i < someArray.length; i++) {
    // is still living
    if (!someArray[i]['yearOfDeath']) {
      someArray[i]['yearOfDeath'] = currentYear;
    };
    personAge = someArray[i]['yearOfDeath'] - someArray[i]['yearOfBirth'];
    personName = someArray[i]['name'];
    // if oldest
    if (personAge > oldestPerson['age']) {
      oldestPerson['age'] = personAge;
      oldestPerson['name'] = personName;
    }
  } 
  return oldestPerson;
}

// Do not edit below this line
module.exports = findTheOldest;
