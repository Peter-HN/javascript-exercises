const fibonacci = function(input) {
	if (input <= 0)
		return "OOPS";

	let num1 = 0;
	let num2 = 1;
	console.log(num2);
	for (let i = 1; i<input; i++) {
		let temp = num2;
		num2 += num1;
		num1 = temp;
	}

	return num2;
};

// Do not edit below this line
module.exports = fibonacci;
