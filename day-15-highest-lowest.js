function highAndLow(numbers){
    // let angka = [];
    // for(let i = 0; i < numbers.length; i++){
    //     if(Math.min(parseInt(numbers[i])) || Math.max(numbers[i])){
    //         angka.push(numbers[i])
    //     }
    // }
    
    let angka = numbers.split(" ").map(e => +e)
    let hasil = []
    hasil.push(Math.min(...angka))
    hasil.push(Math.max(...angka))
    return hasil.map(e => "" + e).join(" ")
   
  }
function highAndLow(numbers){
    let angka = numbers.split(" ").map(e => +e)
    let hasil = []
    hasil.push(Math.max(...angka))
    hasil.push(Math.min(...angka))
    return hasil.map(e => "" + e).join(" ")
   
  }

  console.log(highAndLow("1 2 3 4 5"))