function chunk(arr, size) {
  // Break it up.
  var multiArray = [];
  
  if(size === 0){
  	return multiArray;
  }
  var count = -1;

  for(var i = 0; i < arr.length; i++){

  	if(i % size === 0){
  		count += 1;
  		multiArray[count] = [];
  	}
  	multiArray[count].push(arr[i]);

  }
  return multiArray;
}

console.log(chunk(['a', 'b', 'c', 'd'], 2));