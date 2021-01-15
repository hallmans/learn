// banking progtram
//day 5

var checking = 10;

function isDeposit(amt){
        checking = checking + amt;
	console.log("Your deposit was $" + amt ,"Your new balance is $" + checking);
        return checking;
}
function isWithdraw(amt){
        checking = checking + amt;
	console.log("Your withdraw was $" + amt ,"Your new balance is $" + checking);
	return checking;
}
isDeposit(600);
isWithdraw(200);
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


//if (isDeposit(checking)){
//	console.log("Your account balance is $" + checking);
//}
//if (isWithdraw(checking)){
//	console.log("Your account balance is $" + checking);
//}


