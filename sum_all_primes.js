function sumPrimes(num) {
	var primeArray = [];
	var total = 0;
	for(var i = 1; i <= num; i++){
		var prime = true;
		for(var j = 2; j <= Math.sqrt(i); j++){
			if(i % j === 0){
				prime = false;
			}
		}
		if(prime){
			primeArray.push(i);
			console.log(i);
		}
	}

	for(value in primeArray){
		total += primeArray[value];
	}
  	return total;
}

console.log("total is equal to " + sumPrimes(10));