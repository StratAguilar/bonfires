function pair(str) {
	var sequence = []
	var paired = [];

	for(var i = 0; i < str.length; i++){
		var value = str.charAt(i);
		switch(value){
			case 'A':
				sequence.push("A");
				paired.push("T");
				break;
			case "T":
				sequence.push("T");
				paired.push("A");
				break;
			case "C":
				sequence.push("C");
				paired.push("G");
				break;
			case "G":
				sequence.push("G");
				paired.push("C");
				break;
			default:
				console.log("Invalide entry!");

		}
	}
	var match = makeTwoDimensional(sequence, paired);

 	return match;
}

function makeTwoDimensional(array1, array2){
	var newArray = [];
	for(var i = 0; i < array1.length; i++){
		newArray.push([array1[i], array2[i]]);
	}
	return newArray;
} 

console.log(pair("GCG"));