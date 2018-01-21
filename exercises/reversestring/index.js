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

  const arr = str.split('');    // turns string to array
  arr.reverse();                // reverse element in array
  return arr.join('');          // joins back into string
}

console.log(reverse('apple'));


module.exports = reverse;


// function reverse(str) {
//   return str.split('').reverse().join('');
// }
//
// console.log(reverse('apple'));
