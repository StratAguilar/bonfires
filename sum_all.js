function sumAll(arr) {
	var sum = 0;
	arr.sort(function(a,b){
		return a>b;
	});
	min = Math.min.apply(null, arr);
	max = Math.max.apply(null, arr);
	for(var i = min; i <= max; i++){
		sum += i;
	} 
	return sum;
}

console.log(sumAll([10, 5]));