//dating program




var velma = {
    name : "Velma Dinkley",
    gender : "female",
    attractiveness : 8,
    fun : 4
}

var daphne = {
    name : "Daphne Blake",
    gender : "female",
    attractiveness : 10,
    fun : 9
}

var scooby = {
    name : "Scoobert Scooby Doo",
    gender : "Dog",
    attractiveness : 10,
    fun : 10
}

var shaggy = {
    name : "Norville Shaggy Rodgers",
    gender : "male",
    attractiveness : 5,
    fun : 10
}

var fred = {
    name : "Fred Jones",
    gender : "male",
    attractiveness : 8,
    fun : 4
}

var prospect = [velma, daphne, scooby, shaggy, fred];
function shouldDate(prospect){
    if (prospect.gender == "female"){
        if (prospect.attractiveness > 4){
            console.log("You matched with: " + prospect.name);
        } else {
            console.log("You did not match with: " + prospect.name  + "\n");
        }
        if (prospect.fun > 5){
            console.log("You matched with: " + prospect.name);
        } else {
              console.log("You did not match with: " + prospect.name  + "\n");
        }
    } else {
        console.log("You did not match with: " + prospect.name  + "\n");
    }
}
shouldDate(velma);
shouldDate(daphne);
shouldDate(scooby);
shouldDate(shaggy);
shouldDate(fred);