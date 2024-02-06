// function digitize(n){
//     return n.toString().split('').reverse();
// }

const digitize = n => n.toString().split('').reverse().map(Number);

console.log(digitize(35231))