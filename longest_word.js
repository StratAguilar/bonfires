function findLongestWord(str) {
  str = str.replace(/[^\w\s]/g, "");
  stringArray = str.split(" ");
  var longestLength = 0;
  for(var word in stringArray){
  	if(stringArray[word].length > longestLength){
  		longestLength = stringArray[word].length;
  	}
  }
  return longestLength;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));