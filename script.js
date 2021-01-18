// Develop a small script which generate a random alphanumeric id. Contains characters and numbers randomly. Size of this id should be adjustable (give as a parameter).

// Example: “fe3jo1gl124g” or “xkqci4utda1lmbelpkm03rba”

// Enrich your work with some special characters in your keyboard. ( * , $ , & , etc.)

// Write a script which generates “-“ after every numbers in that id. (if the number is last element do not put “-“)

// Your customer has superstitions. He/She believes that in an id, some characters and numbers shouldnt exist. Please find that given (unwanted) character and numbers and erase them in the given id. Use unwanted array as an argument.

const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const alpha = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';

const special = '$ * & %';

let givenUnwanted = '3 , * , j , q , z';

let nums = numeric.join('').split('');
let arrAlpha = alpha.split(' ');
let specialChar = special.split(' ');
let allChar = nums.concat(arrAlpha).concat(specialChar);

const idMaker = (size, unwanted) => {
	let store = [];
	let codeChars = [];

	for (let i = 0; i < allChar.length; i++) {
		if (!unwanted.includes(allChar[i])) {
			store.push(allChar[i]);
		}
	}
	console.log(store);

	for (let i = 0; i < size; i++) {
		codeChars.push(store[Math.floor(Math.random() * store.length)]);
	}

	let finalCodeChars = [];

	for (let i = 0; i < codeChars.length; i++) {
		if ((codeChars[i] * 1) % 2 == 0 || (codeChars[i] * 1) % 2 == 1) {
			finalCodeChars.push(codeChars[i] + '-');
		} else {
			finalCodeChars.push(codeChars[i]);
		}
	}
	let code = finalCodeChars.join('');

	return code[code.length - 1] == '-' ? code.slice(0, code.length - 1) : code;
};

console.log(idMaker(5, givenUnwanted));
