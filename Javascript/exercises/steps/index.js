// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {  // recursion method
  if (n === row) {    // base case
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }

  // if (stair.length <= row) {
  //   stair += '#';
  // } else {
  //   stair += ' ';
  // }
  // steps(n, row, stair);

  const add = stair.length <= row ? '#' : ' ';  // ? = true, : = else/false
  steps(n, row, stair + add);
}

console.log(steps(4));

module.exports = steps;


// function steps(n) {
//   for (let row = 0; row < n; row++) {   // interate from 0 to n through rows
//     let stair = '';   // new empty string for each row
//
//     for (let column = 0; column < n; column++) {  // interate from 0 to n through columns
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//
//     console.log(stair); // one console.log for each row
//   }
// }
