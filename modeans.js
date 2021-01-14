/*
 * loop for multiple fires
*/

var fire = 1;
var ai = false;
while (fire < 11) {
	
	console.log("\n --> This is modeans #", fire ,"ferda!");

	if (fire < 3){
		 console.log("Modean's is covered under insurance, get a beer!");
	}
	else if (fire > 7) {
		//only fires 8,9,10
		
		if (ai == true) {  //runs for 9,10
			console.log("You're already under investigation");
		} else { // runs for 8
			ai = true;
			console.log("Starting a new investgation")
		}
	 }
	else if (fire == 5) { 
		console.log("Police have been notified")

	} 
	else {
		 //only fires 3,4,5,6,7
		console.log("Modean's is NOT covered under insurance, go to the liquor store. ");
	}
	fire = fire + 1;

}










/*console.log(" wow that's how many fires? like", fire);

console.log("Modean's keeps burning down, we are going to rename it Gail's");

var flood = 1;

while (flood < 6) {

	console.log("Gail's flooded ", flood + "  times and she's pissed");
	flood = flood + 1;
}
var fights = 1;
while (fights < 8) {
	console.log(" you were the toughest guy in letter kenny but now yove got to fight to prove it");
	console.log(" this is fight number", fights + " knock him out");
	fights= fights + 1;
} */
