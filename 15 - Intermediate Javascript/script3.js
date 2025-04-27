//lesson 105- Creating Arrays and checking if item is in it

var guestList = ["Vanshu", "Angela", "Bhavika", "Ayushi", "Ayush", "Mota", "Teddy"];

var checkName = prompt("Please Enter Your Name:");

var x = checkName.slice(0,1);
x = x.toUpperCase();
y = checkName.slice(1,checkName.length);
y = y.toLowerCase();
checkName = x+y;

if (guestList.includes(checkName)) {
    alert("Welcome " + checkName + "!"); 
} else { 
    alert("Sorry, maybe next time.")
}