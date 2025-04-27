//Lesson 106- FizzBuzz question from course 

var output = [];
var count = output.length + 1;

function fizzBuzz() {
    while (count < 101) {
        var value;
        if (count%3 == 0 && count%5 == 0) {
            value = "FizzBuzz";
        }
        if (count%3 != 0 && count%5 == 0) {
            value = "Buzz";
        }
        if (count%3 == 0 && count%5 != 0) {
            value = "Fizz";
        }
        if (count%3 != 0 && count%5 != 0) {
            value = count;
        }
        output.push(value); 
        count++;
    }
    console.log(output);
}
