/*
 * loop for multiple fires
*/

var fire = 1;
while (fire < 11) {
	
	console.log("This is modeans #", fire ,"ferda ");

	if (fire < 3){
		 console.log("Modean's is covered under insurance, get a beer!");
	}
	else if (fire > 7) {
		//only fires 7,8,9,10
		console.log(" under investgation")
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
