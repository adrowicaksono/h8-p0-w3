//input "hello world!"
//output
'!dlrow olleh';

function balikKata(kata) {
	var reverse = '';
	var word = kata.length - 1;

	for (a = word; a >= 0; a--) {
		reverse = reverse + kata[a];
	}
	return reverse;
}

// TEST CASES
console.log(balikKata('hello world!')); // sredoC dna dlroW
