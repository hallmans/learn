function isfuzz(number){
	var result;
	result = number % 3;
	return result == 0;
}

function isbizz(number){
	var result;
	result = number % 5;
	return result == 0;
}

function isfuzzbizz(number){
	return isfuzz(number) && isbizz(number);
}

var number = 1;
while(number < 25) {

	if (isfuzzbizz(number)) {
		console.log("fuzzbizz");
	}
	else if(isfuzz(number)) {
		console.log("fuzz");
	}
	else if(isbizz(number)) {
		console.log("bizz");
	} 
	else {
	
		console.log(number);
	}
	number = number+ 1;
}
