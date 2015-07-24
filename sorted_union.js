function unite(arr1, arr2, arr3) {
	var unitedArray = [arr1, arr2, arr3].reduce(function(a,b){
		return a.concat(b);
	});

	var unitedArray = unitedArray.filter(function(element, index, array){
		return unitedArray.indexOf(element) === index;
	});
  	return unitedArray;
}

console.log(unite([1, 2, 3], [5, 2, 1, 4], [2, 1]));