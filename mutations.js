function mutation(arr) {
  var myString = arr[0].toLowerCase();
  var subString = arr[1].toLowerCase();

  var isMutation = true;

  for(var i = 0; i < subString.length; i++){
  	var isPresent = false;
  	for(var j = 0; j < myString.length; j++){

  		isPresent = false;
  		
  		if(subString[i] === myString[j]){
  			isPresent = true;
  			break;
  		}
  	}
  	if(!isPresent){
  			isMutation = false;
  			break;
  	}
  }

  return isMutation;
}

console.log(mutation(['hello', 'hey']));