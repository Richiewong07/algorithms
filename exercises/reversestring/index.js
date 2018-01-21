// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = '';
  for (let character of str) {          // creates variable to loop through iterable object
    reversed = character + reversed;
  }
  return reversed;
}

module.exports = reverse;


// function reverse(str) {
//   return str.split('').reverse().join('');
// }
//
// console.log(reverse('apple'));
