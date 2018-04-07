//menelusuri selisih tiap indeks dan membandingkan nya dengan selisih sebelumnya


function tentukanDeretAritmatika(arr) {
  //membuat variabel menampung Array
  var data = arr;
  
  //menghitung selisih pertama dengan indeks didepannya simpan di selisih
  var selisih = data[1] - data[0] ;
  var result = true;
  //console.log('selisih : ' +selisih);
  
  //membuat penulusuran tiap indeks
      for(a=0; a<data.length-1; a++){
        //variable untuk menampung selisih tiap indeks
        var term = data[a+1]- data[a];
        
        //jika selisih tidak sama dengan maka selisih berhenti dari perulangan, kembalikan nilai nya
        if(selisih!==term){
          result = false;
          break;
        }
        //console.log('perulangan ke '+ a +' selisihnya :'+term + ' Selisih : '+ selisih);
      }
 
  return result;
  
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false