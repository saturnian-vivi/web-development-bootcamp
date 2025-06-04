//Lesson 85 and 86
//Capitalized Name of user:

var yourName = prompt("What is your name?");
var x = yourName.slice(0,1);
x = x.toUpperCase();
y = yourName.slice(1,yourName.length);
y = y.toLowerCase();

alert("Hello " + x + y + "!");

//This is a single-line comment.
/* This comment is 
split on 2 lines. */