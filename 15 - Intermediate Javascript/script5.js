//Lesson 108- 99 Bottles of Bear Lyrics

var count = 99;
var bottles = "bottles";
var bottles2 = "bottles";

while (count > 0) {
    var bottleNumber = count - 1;
    if (bottleNumber == 0) {
        bottleNumber = "no more";
        bottles2 = "bottles";
    }
    if (bottleNumber == 1) {
        bottles2 = "bottle";
    }
    if (count == 1) {
        bottles = "bottle";
    }
    console.log(count + " " + bottles + " of beer on the wall, " + count + " " + bottles + " of beer.\nTake one down and pass it around, " + bottleNumber + " " + bottles2 + " of beer on the wall.");
    count--; 
}

console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");




/* 

2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.

1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.

*/