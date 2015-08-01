function smallestCommons(arr) {
	arr = arr.sort();
	var rangeArray = getRange(arr[0], arr[1]);
	var largestMulti = getLargestMultiple(rangeArray);
	var smallestMult = rangeArray[0]
	for(var i = 1; i <= largestMulti; i++){
		var isLargest = true;
		for(var index in rangeArray){
			if(i % rangeArray[index] !== 0){
				isLargest = false;
				break;
			}
		}
		if(isLargest === true){
			smallestMult = i;
			break;
		}
	}

  	return smallestMult;
}

function getRange(start, stop){
	var returnArray = [];
	for(var i = start; i <= stop; i++){
		returnArray.push(i);
	}
	return returnArray;
}

function getLargestMultiple(arr){
	var largestMulti = 1;
	for(var i in arr){
		largestMulti *= arr[i];
	}
	return largestMulti;
}

console.log(smallestCommons([1,5]));


