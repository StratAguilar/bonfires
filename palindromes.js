function palindrome(str) {
  str = str.replace(/[^\w]/g, "");
  str = str.toLowerCase();
  var isPalindrome = true;
  console.log(str);
  for(var i = 0, j = str.length - 1; i < str.length/2; i++, j--)
  {
    console.log(str[i] + " " + str[j]);
    if(str[i] !== str[j]){
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
}



console.log(palindrome("racE car."));