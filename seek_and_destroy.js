function destroyer() {
	var args = Array.prototype.slice.call(arguments);
	list = args[0];
	values = args.slice(1, args.length);
	var newArray = list.filter(filterValue.bind(this, list));
	return newArray
}

function filterValue(list, value){
	var returnValue = true;
	console.log("***");
	console.log(value);
	console.log(list);

	for(var i in values){
		console.log("List value is " + values[i])
		if(value === values[i]){
			returnValue = false;
			break;
		}
	}
	console.log(returnValue);
	return returnValue;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));