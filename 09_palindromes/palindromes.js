function isLetter(str) {
  return str.length === 1 && str.match(/[a-zA-Z0-9]/i);
}

const palindromes = function (input) {
	let idxForward = 0;
	let idxBackward = input.length - 1;
	input = input.toLowerCase();
	while (idxForward < idxBackward) {
		while (!isLetter(input[idxForward]))
			idxForward++;
		while (!isLetter(input[idxBackward]))
			idxBackward--;
		if (input[idxForward] !== input[idxBackward])
			return false;
		idxForward++;
		idxBackward--;
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
