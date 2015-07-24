function sumFibs(num) {
	var fibs = [];
	var valueOne = 0;
	var valueTwo = 1;
	var holder = 0;
	var sum = 0;
	while(valueTwo <= num){
		fibs.push(valueTwo);
		holder = valueTwo;
		valueTwo = valueTwo + valueOne;
		valueOne = holder;
	}
	fibs = fibs.filter(function(element, index, array){
		returnValue = false;
		if(element % 2 === 1){
			returnValue = true;
		}
		return returnValue;
	});

	for(var i in fibs){
		sum += fibs[i];
	}
  	return sum;
}

console.log(sumFibs(1000));