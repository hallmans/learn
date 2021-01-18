var Velma = {
    name: "Velma", 
    gender: "female",
    atteractiveness: 6,
    funlevel: 4,

            
};

var Daphny = {
    name: " Daphny",
    gender: "female",
    atteractiveness: 10,
    funlevel:10,
};

var Scooby = {
    name: "Scooby",
    gender: "dog",
    atteractiveness: 10,
    funlevel: 10,
}; 

var Shaggy = {
    name: "Norville Rodgers",
    gender: "male",
    atteractiveness: 5,
    funlevel: 10,

};

var Fred = {
    name: "Fred",
    gender: "male",
    atteractiveness: 8,
    funlevel: 7,
};
var prospects = [ Velma, Daphny, Scooby, Shaggy, Fred ];


function shouldDate(prospect) {
    if (prospect.gender == "female") {

        console.log(" Your matches are", prospect.name);
        if (prospect.atteractiveness > 6) {

            console.log(prospect.name, " is hot");
            if (prospect.funlevel > 6) {
                console.log(prospect.name, "is a firecracker candypiece")


            }
        }
    }
            console.log(prospect.name, "Can't date a dog ya weirdo");
            if (prospect.gender == " dog") {

}   
            }

shouldDate(Velma);
shouldDate(Daphny);

