// function disemvowel(str) {
//     const vowels = "AEIOUaeiou";
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.indexOf(str[i]) === -1) {
//             result += str[i];
//         }
//     }

//     return result;
//   }

const disemvowel = (str) => str.split('').filter((kata) => !"AEIOUaeiou".includes(kata)).join('')

console.log(disemvowel("This website is for losers LOL!"))