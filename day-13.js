// function friend(friends){
//     let baru = [];
//     for(let i = 0; i < friends.length; i++){
//         if(friends[i].length === 4){
//             baru.push(friends[i])
//         }
//     }
//     return baru;
//   }

const friend = f => f.filter(e => e.length === 4);

  console.log(friend(["Love", "Your", "Face", "1"]))