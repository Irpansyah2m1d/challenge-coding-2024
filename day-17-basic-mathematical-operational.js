// function basicOp(operation, value1, value2){
//     if(operation === "+"){
//         return value1 + value2;
//     }else if(operation === "-"){
//         return value1 - value2;
//     }else if(operation === "*"){
//         return value1 * value2;
//     }else{
//         return value1 / value2;
//     }
//   }

// function basicOp(operation, value1, value2){
//     switch (operation) {
//         case "+":
//             return value1+value2
//             break;
//         case "-":
//             return value1-value2
//         case "*":
//             return value1*value2
//         default:
//             return value1/value2
//             break;
//     }
//   }
// function basicOp(operation, value1, value2){
//     if(operation === "+") return value1 + value2;
//     if(operation === "-") return value1 - value2;
//     if(operation === "*") return value1 * value2;
//     return value1 / value2;
//   }


// function basicOp(operation, value1, value2){
//     return (operation === "+") ? (value1+value2) : (operation === "-") ? (value1-value2) : (operation === "*") ? (value1*value2) : (value1/value2)
//   }
// const basicOp = (operation, value1, value2) => (operation === "+") ? (value1+value2) : (operation === "-") ? (value1-value2) : (operation === "*") ? (value1*value2) : (value1/value2)


// Jawaban dari teman-teman yang lain
// function basicOp(operation, value1, value2)
// {
//   var cases = {
//     '+': value1 + value2,
//     '-': value1 - value2,
//     '*': value1 * value2,
//     '/': value1 / value2
//   };
//   return cases[operation]
// }

function basicOp(operation, value1, value2)
{
    // Fungsi eval -> yakni melakukan operasi meskipun bentuknya string
  return eval(value1 + operation + value2);
    // return eval("1+2*3")
}

  console.log(basicOp("+", 49, 7))