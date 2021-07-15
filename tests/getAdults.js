/* eslint-disable no-restricted-syntax */

export const getAdults = (obj) => {
  const objWithAdultPeople = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      objWithAdultPeople[key] = obj[key];
    }
  }
  return objWithAdultPeople;
};

// examples
getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
