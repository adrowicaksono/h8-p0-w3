function pasanganTerbesar(num) {
  //STORE array with SPILT from num
  var list = String(num).split('');
  
  //membuat var untuk tampungan nilai
  var tampung = '';
  
  //menelusuri array
  for(a=0; a<list.length-1;a++){
    //menentukan dan menampung pasangan array (string)
    var tampung2 = list[a]+list[a+1];
    //mengkondisikan jika result lebih besar dari var tampung, maka assignment var tampung
    if(Number(tampung)<Number(tampung2)){
      tampung = tampung2;
    
    } else tampung;
   
  }
  return Number(tampung);
  
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
