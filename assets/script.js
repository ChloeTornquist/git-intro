function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(1, 350);

for (i = 0; i < 100000; i++){
	var x = getRandomIntInclusive(1, 350);
	if (x === 0 || x === 1 || x === 350 || x === 351) {
		console.log(x);
	}
}