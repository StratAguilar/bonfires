function convert(num) {
	roman = "";
	while(num > 9){
		roman += "X";
		num -=10;
	}
	if(num === 9){
		roman += "IX";
		num -= 9;
	}
	else if(num === 4){
		roman += "IV";
		num -= 4;
	}
	if(num >= 5){
		roman += "V";
		num -= 5;
	}
	while(num > 0){
		roman += "I";
		num -= 1;
	}

 	return roman;
}

console.log(convert(36));