// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5], 2))

module.exports = chunk;


// function chunk(array, size) {
//   const chunked = [];   // new array to hold all different chunks
//
//   for (let element of array) {    // iterate through the array
//     const last = chunked[chunked.length - 1];   // last element inside the array
//
//     if (!last || last.length === size) {    // check if last element does not exist in array or if array equals to the chunk size
//       chunked.push([element]);    // push element to a new chunk
//     } else {
//       last.push(element);   // push element to current chunk
//     }
//   }
//   return chunked;
// }
