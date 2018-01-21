// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
<<<<<<< HEAD
  let reversed = '';
  for (let character of str) {          // creates variable to loop through iterable object
    reversed = character + reversed;
  }
  return reversed;
}
=======
  const arr = str.split('');    // turns string to array
  arr.reverse();                // reverse element in array
  return arr.join('');          // joins back into string
}

console.log(reverse('apple'));
>>>>>>> 1183469c6a933b35213c6617ef47020467ae440c

module.exports = reverse;


// function reverse(str) {
//   return str.split('').reverse().join('');
// }
//
// console.log(reverse('apple'));
