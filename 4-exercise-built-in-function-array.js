var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(a){
  a.splice(1, 2, a[1]+' Elsharawy', 'Provinsi ' + a[2]);
  a.splice(4, 2, 'Pria', 'SMA International Metro');
  
  var tgl = a[3].split('/');
  var bulan ='';
  
  
  
  switch(Number(tgl[1])){
    case 1: bulan = 'januari'; break;
    case 2: bulan = 'februari'; break;
    case 3: bulan = 'maret'; break;
    case 4: bulan = 'april'; break;
    case 5: bulan = 'mei'; break;
    case 6: bulan = 'juni'; break;
    case 7: bulan = 'juli'; break;
    case 8: bulan = 'agustus'; break;
    case 9: bulan = 'september'; break;
    case 10: bulan = 'oktober'; break;
    case 11: bulan = 'november'; break;
    case 12: bulan = 'desember'; break;
    default : bulan = 'tanggal tidak tersedia'; break;
  }
  
  tgl = tgl.sort(function(value1, value2) { return Number(value1) < Number(value2) })
  
  console.log(a);
  console.log(bulan);
  console.log(tgl);
  console.log(a[1].slice(0,14));
  
}



dataHandling2(input);
