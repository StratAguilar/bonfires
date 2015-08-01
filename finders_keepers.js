function find(arr, func) {
	var num;
	for(var index in arr){
		if(func(arr[index])){
			num = arr[index];
			break;
		}
	}
  return num;
}

console.log(find([1, 2, 3, 4], function(num){ return num % 2 === 0; }));