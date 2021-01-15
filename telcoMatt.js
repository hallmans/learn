var checking = 10;
function deposit(amt) {
	checking = checking + amt;
	console.log("deposit", amt, "new balance", checking);
	return checking;
}

function withdraw(amt) {
	
	
	if(amt > checking) {
		console.log("insufficient funds for the", amt);
	}
	else{ 
		checking = checking - amt;
		console.log("withdraw", amt, "new balance", checking);
	}	
	return checking;
}

deposit(300);
withdraw(100);
deposit(2000);
withdraw(600);
deposit(45);
withdraw(3000);
