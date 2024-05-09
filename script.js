function calculateBirthday() {
	const birthDate = document.getElementById('birth-date').value;
	const birthDateArray = birthDate.split('-');
	const birthYear = birthDateArray[0];
	const birthMonth = birthDateArray[1];
	const birthDay = birthDateArray[2];
	const today = new Date();
	const nextBirthday = new Date(today.getFullYear(), birthMonth - 1, birthDay);
	if (nextBirthday < today) {
		nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
	}
	const age = today.getFullYear() - birthYear;
	const yearsUntilNextBirthday = nextBirthday.getFullYear() - today.getFullYear();
	const daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
	const hoursUntilBirthday = Math.ceil(daysUntilBirthday * 24);
	const minutesUntilBirthday = Math.ceil(hoursUntilBirthday * 60);
	const secondsUntilBirthday = Math.ceil(minutesUntilBirthday * 60);
	const resultElement = document.getElementById('result');
	resultElement.innerHTML = `
		<div>You are ${age} years old.</div>
		<div>Next birthday in ${yearsUntilNextBirthday} year(s), ${daysUntilBirthday} days, ${hoursUntilBirthday} hours, ${minutesUntilBirthday} minutes, and ${secondsUntilBirthday} seconds.</div>
	`;
}