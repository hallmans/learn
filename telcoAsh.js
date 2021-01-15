// banking progtram
//day 5

var checking = 10;

function isDeposit(amt){
        checking = checking + amt;
	console.log("Your deposit was $" + amt ,"Your new balance is $" + checking + "\n");
        return checking;
}
function isWithdraw(amt){
	var broke = amt > checking;
	console.log("Your withdraw was $" + amt ,"Your new balance is $" + checking);
		if(broke){
			checking = checking + amt;
			console.log("Insufficient funds! We cannot withdraw ", amt, "\n");
		}
		else{
			console.log("Thank you for your purchase!\n")
		}		
        checking = checking - amt;

	return checking;		
}

isDeposit(600);
isWithdraw(900);
isDeposit(125);
isWithdraw(40);
isDeposit(23);
isWithdraw(432);
isDeposit(876);
isWithdraw(11);
isDeposit(60);
isWithdraw(65);
isDeposit(1000);
isWithdraw(35);




