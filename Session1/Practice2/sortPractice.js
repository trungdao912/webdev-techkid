'use strict'


function swap(arr, pos1, pos2) {
  let temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
}

function sort(input) {
  for (let i = 1; i < input.length; i++) {
    while (input[i] < input[i-1]) {
      swap(input, i, i-1);
      i--; 
    }
  }
  return input;
}

module.exports = sort
