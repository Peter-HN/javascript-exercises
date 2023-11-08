const findTheOldest = function(people) {
	let oldest = {
		name: "Ray",
		age: 0
	};
	let currentYear = new Date().getFullYear();
	for (let person of people) {
		if (person.yearOfDeath == null)
			person.yearOfDeath = currentYear;
		let age = person.yearOfDeath - person.yearOfBirth;
		if (age > oldest.age)
		{
			oldest.name = person.name;
			oldest.age = age;
		}
	}

	return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
