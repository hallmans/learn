function isfizz(number) {
	var result;
	result = number % 3;
	return result == 0;
}

function isbuzz(number) {
	var result;
	result = number % 5;
	return result == 0;
}

function isfizzbuzz(number) {
	return isfizz(number) && isbuzz(number);
}


var number = 1;
while( number < 100) {
 
	if (isfizzbuzz(number)) {
		console.log( "fizzbuzz");
	}
	else if(isfizz(number)) {
		console.log("fizz");
	}
	else if(isbuzz(number)) {
		console.log("buzz");
	}
	else{

		console.log(number);
	}
	number = number + 1;
}
