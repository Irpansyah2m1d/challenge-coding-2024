
// Cara bar bar
// function areYouPlayingBanjo(name) {
//     // Implement me
//     // return name;
//     if(name[0] === "R" || name[0] === "r"){
//         return name + " plays banjo"
//     }else {
//         return name + " does not play banjo"
//     }
//   }
// function areYouPlayingBanjo(name) {
//     // Implement me
//     // return name;
//     // return (name[0] === "R" || name[0] === "r") ? name + " plays banjo" : name + " does not play banjo";
//   }
// const areYouPlayingBanjo = name => (name[0] === "R" || name[0] === "r") ? name + " plays banjo" : name + " does not play banjo";
// const areYouPlayingBanjo = name => name + (name.toLowerCase().startsWith('r') ? " plays" : " does not play" ) + " banjo"
const areYouPlayingBanjo = name => name + (name[0].toLowerCase() === "r" ? " plays" : " does not play" ) + " banjo"
  console.log(areYouPlayingBanjo("Adam"))