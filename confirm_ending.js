function end(str, target) {
	var returnValue = false;
	var start = str.length - target.length;
	var substring = str.substring(start, str.length);
  	if(substring === target){
  		returnValue = true;
  	}
  	return returnValue;
}

end('Bastian', 'ian');