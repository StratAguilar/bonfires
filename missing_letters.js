function fearNotLetter(str) {

	var returnValue;
	var asciiOfFirst = str.charCodeAt(0);
	var asciiOfLast = str.charCodeAt(str.length - 1);

	for(var i = asciiOfFirst; i < asciiOfLast; i++){
		if(str.charCodeAt(i - 97) !== i){
			returnValue = String.fromCharCode(i);
			break;
		}
	}
  	return returnValue;
}

console.log(fearNotLetter('abce'));