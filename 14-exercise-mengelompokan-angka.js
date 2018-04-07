function mengelompokkanAngka(arr) {
  // membuat array kompilasi
  var komp = [[],[],[]];
  
  for(a=0; a<=arr.length-1; a++){
    if(arr[a]%3===0){
      komp[2].push(arr[a]);
    }else if(arr[a]%2===0){
      komp[0].push(arr[a]);
    }else komp[1].push(arr[a]);
  }
  return komp;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]