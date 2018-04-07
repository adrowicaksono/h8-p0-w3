function cariMean(arr) {
  //simpan nilai array
  var data = arr;
  
  //set variable untuk menampung hasil
  var tampung = 0;
  
  //menelusuri array dan langsung di jumlahkan
  for(var a=0; a<data.length; a++){
    tampung = tampung + data[a];
  }
  
  //mengembalikan nilai tampung dibagi jumlah data dan dibulatkan
  return (Math.round(tampung/data.length));
}
