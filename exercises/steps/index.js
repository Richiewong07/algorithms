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

function steps(n) {
  
}

console.log(steps(4))

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
