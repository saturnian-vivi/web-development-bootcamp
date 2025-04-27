function HouseKeeper(firstName, lastName, age, yearsOfExperience, cleaningRepertoire) {    //constructor function
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("Cleaning in Progress...");
    }
}


var houseKeeper1 = new HouseKeeper("Helen", "Clorance", 29, 8, ["bedroom", "lobby", "bathroom"]);                    // creating new object 
houseKeeper1.clean();                                                      //Shows an alert saying "Cleaning in Progress..."

/*

----Creating object directly without constructor function:

var housekeeper1 = {
    firstName : "Helen",
    lastName : "Keller",
    age : 29,
    workExperience : 7
};

*/