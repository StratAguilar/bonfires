function slasher(arr, howMany) {
  
  var subArray = [];

  if(howMany > arr.length){
  	return subArray;
  }

  subArray = arr.slice(howMany, arr.length);
  return subArray;
}

console.log(slasher([1, 2, 3], 2));