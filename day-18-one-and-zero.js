// const binaryArrayToNumber = arr => {
//     // your code
//     return parseInt(arr.join(''), 2) 
//   };

// Dibelakang cara konversi integer ke biner secara manual
// function integerToBinary(integerValue) {
//     // Validasi untuk nilai non-negatif
//     if (integerValue < 0) {
//       console.error("Input harus non-negatif");
//       return "";
//     }
  
//     // Jika nilai input adalah 0, langsung kembalikan "0"
//     if (integerValue === 0) {
//       return "0";
//     }
  
//     // Inisialisasi variabel untuk menyimpan hasil
//     var binaryResult = "";
  
//     // Loop untuk mengonversi nilai integer ke biner
//     while (integerValue > 0) {
//       // Dapatkan sisa bagi dari pembagian nilai integer dengan 2
//       var remainder = integerValue % 2;
  
//       // Tambahkan sisa bagi ke awal string hasil
//       binaryResult = remainder + binaryResult;
  
//       // Update nilai integer dengan hasil pembagian bulat (floor)
//       integerValue = Math.floor(integerValue / 2);
//     }
  
//     return binaryResult;
//   }
  
//   // Contoh penggunaan
//   var integerValue = 13; // Nilai integer yang ingin dikonversi
//   var result = integerToBinary(integerValue);
  
//   console.log(result); // Output: "1101"
  
// Cara cepat konversi biner ke integer
// console.log(parseInt('0110', 2))

// // Konversi integer ke biner
// const a = 6;
// console.log(a.toString(2))


const binaryArrayToNumber = arr => parseInt(arr.join(''), 2)

console.log(binaryArrayToNumber([0, 1,1,0]))