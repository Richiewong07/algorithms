// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi)    // reg ex expression; g : don't stop at first match; i : case insensitive
  return matches ? matches.length : 0;    // match gives an array so need to return length of the array
}

console.log(vowels('Hi There!'));

module.exports = vowels;

// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {   // check if char in string is a vowel
//       count++;
//     }
//   }
//
//   return count;
// }
