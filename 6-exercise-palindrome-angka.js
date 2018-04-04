function angkaPalindrome(num){
    //num di naikkan jumlah karena akan ambil yang lebih besar, kemudian dibalik. dan diulangi sampai ketemu angka yang cocok
    //STORE rev with 0
    var rev = 0;
    //repeat until num EQUALS rev (set with false consition)
    //if false increment num and assigment rev with reverse of num (after increment)
    while(num!==rev){ 
      num++;
      //ASSIGMENT rev with 'num' to String() then 
      //spilt() with '' as separators then 
      //reverse() by index then Join() then
      //CONVERT to number.
      rev = Number(String(num).split('').reverse().join(''));
    }

    return num;
}


// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001  