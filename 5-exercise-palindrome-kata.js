function palindrome(str){

  var spt = str.split("");
  console.log(spt);
  
  var rev = spt.reverse();
  console.log(rev);
  
  var join = rev.join("");
  console.log(join);
  
  return Boolean (str===join);
  
}

console.log(palindrome('mobil'));