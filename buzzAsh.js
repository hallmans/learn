//Day 5
var num = 1;

	function doPitter(num){
		var result;
		result = num % 3;
		return result == 0;
	}
	function doPatter(num){
		var result;
		result = num % 5;
		return result ==0;
	}
	function doPitterPatter(num){
		var result;
		result = num % 15;
		return result  ==0;
	}

while (num < 75){
        if (doPitterPatter(num)){
                console.log(num + " Pitter Patter Let's get at 'er");
        }
        else if (doPitter(num)){
                console.log(num + " Pitter");
        }
        else if (doPatter(num)){
                console.log(num + " Patter");
                        }
        else{
                console.log(num);
        }
        num = num +1;
}

