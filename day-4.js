// function toCamelCase(str){
//     let words =  str.split(/[^a-zA-Z0-9]/)
//     for(let i = 1; i <= words.length-1; i++){
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join('');
// }

const toCamelCase = (str) => str.split(/[^a-zA-Z0-9]/).map((e, i) => i > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e).join('')




console.log(toCamelCase("the-stealth-warrior"))