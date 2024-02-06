// function getMiddle(s)
// {
//   let tengah = Math.floor(s.length/2)
//   for(let i = 0; i < s.length; i++){
//       if(s.length % 2 == 1){
//         return s.charAt(tengah)
//       }else {
//         return s.substring(tengah-1, tengah+1)
//       }
//   }
// }

const getMiddle = s => (s.length % 2 == 1) ? s.charAt(Math.floor(s.length / 2)) : s.substring(Math.floor(s.length / 2)-1, Math.floor(s.length / 2)+1)

console.log(getMiddle("dani"))