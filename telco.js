<<<<<<< HEAD
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


=======
var checking = 10;
function deposit(amt) {
	checking = checking + amt;
	console.log("deposit", amt, "new balance", checking);
	return checking;
}
function withdraw(amt) {
	checking = checking - amt;
	console.log("withdraw", amt, "new balance", checking);
	return checking;
}

deposit(300);
withdraw(100);
deposit(2000);
withdraw(600);
deposit(45);
withdraw(3000);
>>>>>>> aaf8d502e384d6ea4714ae418ef3c53401c8f479
