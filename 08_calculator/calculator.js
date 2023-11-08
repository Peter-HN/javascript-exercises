const add = function(...args) {
	let total = 0;
	for (let num of args) {
		if (typeof num == 'number')
			total += num;
	}
	return total;
};

const subtract = function(...args) {
	return args[0] - args[1];
};

const sum = function(arr) {
	let total = 0;
	for (let num of arr) {
		total += +num;
	}
	return total;
};

const multiply = function(arr) {
let total = 1;
	for (let num of arr) {
		total *= +num;
	}
	return total;
};

const power = function(base, power) {
	return Math.pow(base,power);
};

const factorial = function(num) {
	let total = 1;
	while (num > 0) {
		total *= num--;
	}

	return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
