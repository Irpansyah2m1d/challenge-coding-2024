// function digitalRoot(n) {
//     let arr = 0;
//     for (let i of n.toString()){
//         arr += parseInt(i);
//     }
//     while(arr > 10){
//         let totalSting = arr.toString();
//         arr = 0;
//         for(let i of totalSting.toString()){
//             arr += parseInt(i);
//         }
//     }
//     return arr;
//   }
// function digitalRoot(n) {
//     let arr = n
//       .toString()
//       .split('')
//       .map(Number)
//       .reduce((total, digit) => total + digit, 0);
  
//     return arr < 10 ? arr : digitalRoot(arr);
//   }
// function digitalRoot(n) {
//     return (n - 1) % 9 + 1;
//   }
function digital_root(n) {
    return--n%9+1;
  }

  const digitalRoot = n => --n%9+1;
//   const digitalRoot = (n) => {
//     let arr = n;
//   }
// const digitalRoot = n => (arr => (arr < 10 ? arr : digitalRoot(arr)))(String(n).split('').reduce((total, digit) => total + Number(digit), 0));



  console.log(digitalRoot(234))