// String.prototype.toJadenCase = function () {
//     return this.split(' ').map((e) => {
//         return e.charAt(0).toUpperCase() + e.slice(1)
//     }).join(" ");
//   };

// String.prototype.toJadenCase = function(){return this.split(' ').map( e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")}

//   console.log("How can mirrors be real if our eyes aren't real".toJadenCase())

console.log("hello world".split(" ").map((i) => i.replace(i[0], i[0].toUpperCase())).join(" "))