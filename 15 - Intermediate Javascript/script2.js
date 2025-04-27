//lesson 106 and 110- Link to Why Can't Programmers.. Program? 
//FizzBuzz problem

var nums = [];

for (let I = 1; I <= 100; I++) {
    if (I%3 == 0 && I%5 == 0) {
		nums.push("FizzBuzz");
	}
	if (I%3 == 0 && I%5 != 0) {
		nums.push("Fizz");
	}
	if (I%5 == 0 && I%3 != 0) {
		nums.push("Buzz");
	}
    if (I%3 != 0 && I%5 != 0) {
		nums.push(I);
	}
}

console.log(nums);