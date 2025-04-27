//Lesson 87
//Find number of bottles that can be bought

function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var bottles = Math.trunc(money/1.5);
    console.log("Buy " + bottles + " bottles from the store.")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return money%1.5;
  }

  //cost of each bottle is 1.5 dollars
  var change = getMilk(14);
  console.log("Your change remaining is " + change + " dollars.");