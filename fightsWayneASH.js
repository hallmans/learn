// Wayne fights program
// Day 5

var fightsLk = 1;


function skillLevel(fight){
	var strength = Math.floor(Math.random() * 11);      // returns a random integer from 0 to 10
	console.log("The strength of your opponent is " + strength);
	return strength;
}
function wayne(fight){
	var strength = 3 + Math.floor(Math.random() * 11);
	console.log("The strength of Wayne is " + strength);
	return strength;
}

var wayneSkill;
var challengerSkill;

while (fightsLk < 21){
	wayneSkill = wayne();
	challengerSkill = skillLevel();
	if (wayneSkill == challengerSkill){
		console.log("TIE!\n");
	}
	else if(wayneSkill < challengerSkill){
		console.log("Skid is the winner!\n");		
	}
	else{
		console.log("Wayne is the winner!\n");
	}
	fightsLk = fightsLk + 1;
}
