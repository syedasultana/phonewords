const keypad = [
	{
		num: 2,
		letters: ['a', 'b', 'c']
	},
	{
		num: 3,
		letters: ['d', 'e', 'f']
	},
	{
		num: 4,
		letters: ['g', 'h', 'i']
	},
	{
		num: 5,
		letters: ['j', 'k', 'l']
	},
	{
		num: 6,
		letters: ['m', 'n', 'o']
	},
	{
		num: 7,
		letters: ['p', 'q', 'r', 's']
	},
	{
		num: 8,
		letters: ['t', 'u', 'v']
	},
	{
		num: 9,
		letters: ['w', 'x', 'y', 'z']
	}
];

const splitDigits = (numericStr) => {
	return numericStr.split('').map(element => parseInt(element));
}

const getLetterCombos = (numericStr) => {
	let digits = splitDigits(numericStr);
	
	let letterPossibilities = []; 
	for (y = 0; y < digits.length; y++) {
		for (x = 0; x < keypad.length; x++) {
	        if (keypad[x].num === digits[y]) {
	            letterPossibilities.push(keypad[x].letters);
	        }
	    }
	}
	
	if (letterPossibilities.length === 1) {
		return letterPossibilities.flat();
	}

	let letterCombos = [];
	for (a = 0; a < letterPossibilities.length; a++) { 
		let otherInnerArrays = letterPossibilities.filter(innerArray => letterPossibilities.indexOf(innerArray) !== a);
		for (b = 0; b < letterPossibilities[a].length; b++) { 
		let lettersToCombine = [letterPossibilities[a][b]];
			for (c = 0; c < otherInnerArrays.length; c++) { 
				for (d = 0; d < otherInnerArrays[c].length; d++) {
					lettersToCombine.push(otherInnerArrays[c][d]);
					let combo = lettersToCombine.join('');
					letterCombos.push(combo);
				}
			}
		}
	}

	return letterCombos;
}




module.exports = getLetterCombos;

