function translate(str) {
	
	var count = 0;
	while(!isVowel(str.charAt(count))){
		console.log(str.charAt(count));
		count += 1;
	}

	firstLetters = str.slice(0,count);
	tail = str.slice(count, str.length);

	if(isVowel(firstLetters)){
		tail = str;
		tail += "way";
	}else{
		tail += firstLetters;
		tail += "ay";
	}

 	return tail;
}

function isVowel(char){
	return 'aeiou'.indexOf(char.toLowerCase()) !== -1;
}

console.log(translate("onsonant"));