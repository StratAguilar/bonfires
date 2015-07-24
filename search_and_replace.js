function replace(str, before, after) {
	if(before[0] === before[0].toUpperCase()){
		after = after.charAt(0).toUpperCase() + after.slice(1);
	}
	str = str.replace(before, after);
 	return str;
}

console.log(replace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));