//fizzbuzz program


// Using for/else/else if
/*var num = 1;

while (num < 101){
	
	if (num % 3  == 0 && num % 5 == 0){
		 console.log(num + " FIZZBUZZ");
	}
	if (num % 3 == 0){
		 console.log(num + " FIZZ");
	}
	
	else if (num % 5 == 0){
		 console.log(num + " BUZZ");
	}	
	
	else {
		 console.log(num);
	}
			
 	num = num + 1;
}
*/

// Using functions

var num = 1;

while (num < 101){

	function isFizz(num){
		var result;
		result = num % 3;
		return result == 0;
			}
	function isBuzz(num){
                var result;
                result = num % 5;
                return result == 0;
                        }
	function isFizzBuzz(num){
                var result;
                result = num % 15;
                return result == 0;
                        }
	if (isFizzBuzz(num)){
		console.log(num + " FIZZBUZZ");
			}
	else if (isBuzz(num)){
		console.log(num + " BUZZ");
			}
	else if (isFizz(num)){
		console.log(num + " FIZZ");
			}
	else{
		console.log(num);
	}
num = num +1;
}






