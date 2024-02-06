// function makeNegative(num) {
//     return -num
//   }

// const makeNegative = num => num > 0 ? -num : num;
function makeNegative(num) {
    return -Math.abs(num);
  }

  console.log(makeNegative(9))