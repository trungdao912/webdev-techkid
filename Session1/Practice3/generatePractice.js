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

let arr = [];

function generate(testLengthArray){
  let newArr = sort(testLengthArray);
  
  for (let j = 0; j < newArr.length; j++) {
      let target = newArr[j];
      let output;
      for (let i = 0; i < newArr.length; i++) {
          
          if (target === newArr[i]) {
            output = i;
            arr[j] = {
                input: newArr,
                target: newArr[j],
                output: i
            }
          }
        }
  }

  return arr;
}



module.exports = generate

