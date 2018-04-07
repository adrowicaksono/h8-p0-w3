function targetTerdekat(arr) {
  var arrO = [];
  var arrX = [];
  var diff = [];
  
  //menemukan index 'o' simpan di arrO dan index 'x' simpan di arrX
      for(a=0; a<=arr.length-1; a++){
        if(arr[a]==='o'){
          arrO.push(a);
        }else if(arr[a]==='x'){
          arrX.push(a);
        }
      }
  
  //membandingkan seluruh isi arrO terhadap arrX simpan di array diff    
  for(b=0; b<=arrO.length-1; b++){
      for(c=0; c<=arrX.length-1; c++){
        //setiap perulangan var hitung selalu mulai dari o
        var hitung = 0;
        
        hitung = hitung + Math.abs(arrO[b] - arrX[c]);
        diff.push(hitung);          
      }
  }
  
  //Mencegah array kosong, supaya bisa dicari nilai terkecilnya
  if(diff.length===0){
    diff.push(0);
  }
  
  console.log(arrX);
  console.log(arrO);
  console.log(diff);
  //console.log(diff.length)
  //menemukan bilangan terkecil di di array tampung
  return Math.min(...diff);
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
