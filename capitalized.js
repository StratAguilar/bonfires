function titleCase(str) {
 	var stringArray = str.split(" ");
 	for(var word in stringArray){
 		stringArray[word] = stringArray[word].toLowerCase();
 		stringArray[word] = stringArray[word].charAt(0).toUpperCase() + stringArray[word].slice(1);
 		console.log(stringArray[word]);
 	}
 	str = stringArray.join(" ");
  	return str;
}

	titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");