const leapYears = function(year) {
	// Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400
	// if % 100, must be % 400 --> if not, false
	// if ~ % 100, must be %4 --> if not, false

	if (year % 100 == 0) {
		return year % 400 == 0;
	} else {
		return year % 4 == 0;
	}
};

// Do not edit below this line
module.exports = leapYears;
