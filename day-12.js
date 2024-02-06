// function filter_list(l) {
//     // Return a new array with the strings filtered out
//     let baru = [];
//     for(let i=0; i < l.length; i++){
//         if(typeof(l[i]) == "number"){
//             baru.push(l[i]);
//         }
//     }

//     return baru;
//   }

const filter_list = l => l.filter(el => typeof(el) == "number")

  console.log(filter_list([1,'a','b',0,15]));