// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {   // check length of keys in object
    return false;
  }

  for (let char in aCharMap) {    // check number of times char is used, iterate of aCharMap and compare it to bCharMap
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap (str) {   // helper function
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {   // reg exp
    charMap[char] = charMap[char] + 1 || 1;  // assign char to object or plus another
  }

  return charMap;
}

console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));

module.exports = anagrams;
