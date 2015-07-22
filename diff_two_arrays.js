function diff(arr1, arr2) {
	var result = arr1.filter(filterByArray, {newArray: arr2});
	var result2 = arr2.filter(filterByArray, {newArray: arr1});
	var result = result.concat(result2);
	return result;
};

function filterByArray(element, index, array){
	var returnVal = true;
	for(var i in this.newArray){
		if(element === this.newArray[i]){
			returnVal = false;
		}
	}
	return returnVal;
};

diff([1, 2, 3, 5, 7, 8], [1, 2, 3, 4, 5]);

