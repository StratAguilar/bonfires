function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  arr = arr.filter(filterFalseyValue);
  return arr;
}

function filterFalseyValue(obj){
	var isValid = true
	if(!obj){
		isValid = false;
	}
	return isValid;
}

console.log(bouncer([7, 'ate', '', false, 9]));