function isNumber(...args) {
	for (let item of args) {
		if (typeof item !== 'number')
			return false;
	}

	return true;
}

const sumAll = function(num1, num2) {
	if (num1 < 0 || num2 < 0 || !isNumber(num1, num2))
		return "ERROR";

	let low = num1;
	let high = num2;
	if (num1 > num2) {
		low = num2;
		high = num1;
	}
	let count = 0;
	for (let i = low; i <= high; i++) {
		count += i;
	}

	return count;
};

// Do not edit below this line
module.exports = sumAll;
