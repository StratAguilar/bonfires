function repeat(str, num) {
  // repeat after me
  var repeatString = '';
  for(var i = 0; i < num; i++){
  	repeatString = repeatString.concat(str);
  }
  return repeatString;
}

repeat('abc', 3);