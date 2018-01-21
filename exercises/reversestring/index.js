// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const arr = str.split('');    // turns string to array
  arr.reverse();                // reverse element in array
  return arr.join('');          // joins back into string
}

console.log(reverse('apple'));

module.exports = reverse;
