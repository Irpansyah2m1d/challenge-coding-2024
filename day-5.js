const countBits = (n) => n.toString(2).split('').reduce((a, i) => (parseInt(a) + parseInt(i)), 0); 


console.log(countBits(1234))