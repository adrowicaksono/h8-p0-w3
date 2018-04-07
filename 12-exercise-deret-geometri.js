function tentukanDeretGeometri(arr) {
  //membuat variabel menampung Array
  //var data = arr;
  
  //menghitung selisih pertama dengan indeks didepannya simpan di testNumber
  var testNumber = arr[1] / arr[0] ;
  var result = true;
  //console.log('testNumber : ' +testNumber);
  
  //membuat penulusuran tiap indeks
      for(a=0; a<arr.length-1; a++){
        //variable untuk menampung selisih tiap indeks
        var term = arr[a+1] / arr[a];
        
        //jika selisih tidak sama dengan testNumber maka  berhenti dari perulangan, kembalikan nilai false kedalam result
        if(testNumber!==term){
          result = false;
          break;
        }
        //console.log('perulangan ke '+ a +' selisihnya :'+term + ' Selisih : '+ selisih);
      }
 
  return result;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false