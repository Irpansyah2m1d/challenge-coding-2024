// const coba = 123;

// // console.log(+[...`${coba}`].join(''))
// console.log(typeof(+coba))

// console.log(+coba)

// function orderWordsByNumber(sentence) {
//     // Memisahkan kata-kata dalam kalimat
//     let words = sentence.split(' ');
  
//     // Mengurutkan kata-kata berdasarkan nomor yang terdapat di dalamnya
//     words.sort(function (a, b) {
//       return a.match(/\d/) - b.match(/\d/);
//     });
  
//     // Menggabungkan kata-kata yang sudah diurutkan kembali menjadi kalimat
//     let result = words.join(' ');
  
//     return result;
//   }

const order = (words) => words.split(' ').sort((a, b) => a.match(/[1-9]/) - b.match(/[1-9]/)).join(' ')


console.log(order("is2 Thi1s T4est 3a"))