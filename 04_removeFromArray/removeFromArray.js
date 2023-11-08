const removeFromArray = function(input, ...rem) {
	let ret = new Array;

	input.forEach((item) => {
		if (!rem.includes(item)) {
			ret.push(item);
		}
	});

	return ret;
};

// Do not edit below this line
module.exports = removeFromArray;
