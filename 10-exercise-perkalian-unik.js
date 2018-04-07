function perkalianUnik(arr) {
  // you can only write your code here!
  //simpan nilai Array
  var data = arr;
  
  //membuat variable tampung array dengan jumlah indeks yang sama dengan data [[][][]]
  var tampungArray = [];
  //for(c=0; c<data.length; c++){
  //  tampungArray[c] = 0;
  //}
  console.log(tampungArray);
  
  //menelusuri Array perindeks
  for(a=0; a<data.length; a++){
    //membuat variable tampung yang setiap perulangan menjadi 1
    var tampung = 1;
    for(b=0; b<data.length; b++ ){
      
      if(b!=a){
        tampung = tampung * data[b];
      }
    }
    //simpan hasil perkalian kedalam tampungArray indeks ke a`
    //tampungArray[a]= tampung;
	tampungArray.push(tampung);
  }
  //menugaskan kembali array perindeks
  
  return tampungArray;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
