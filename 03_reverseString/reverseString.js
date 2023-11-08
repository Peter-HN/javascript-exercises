const reverseString = function(str) {
	if (str.length < 2)
		return str;
	let out = "";
	for (let char = str.length-1; char >= 0; char--) {
		out += str[char];
	}
	return out;
};

// Do not edit below this line
module.exports = reverseString;
