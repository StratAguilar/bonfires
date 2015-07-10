function largestOfFour(arr) {
  // You can do this!
  var returnList = [];
  console.log(arr.length);
  for(var i = 0; i < arr.length; i++)
  {
  	var largestValue = arr[i][0];
  	for(var j = 0; j < arr[i].length; j++)
  	{
  		if(arr[i][j] > largestValue)
  		{
  			largestValue = arr[i][j];
  		}
  	}	
  	returnList.push(largestValue);	
  }
  console.log(returnList);
  return returnList;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);