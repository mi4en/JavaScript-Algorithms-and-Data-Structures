// REFACTORING QUESTIONS:
// Can we check the result
// Can we derive the result different way
// Can we understand the code in a glance
// Can we use the result or method to solve other problem (is the code reusable)
// Can the performance be improved
// Can we think of other ways to refactor
// How other people solved this problem

function charCountOriginal(str) {
	var obj = {};
	for (let i = 0; i < str.length; i++) {
		var char = stri[i].toLowerCase();
		if (/[a-z0-9]/.test(char)) {
			if (obj[char] > 0) {
				obj[char]++;
			} else {
				obj[char] = 1;
			}
		}
	}
	return obj;
}

// Refactored:

function charCount(str) {
	var obj = {};
	// we will change the for loop with simple for
	for (var char of str) {
		// we will move the lower case after we filtered the input
		// that way we will avoid to apply the method on non-alpha chars
		// we will replace the regex with the new function
		if (isAlphaNumeric(char)) {
			char = char.toLowerCase();
			// we will replace the if else wiht one line evaluation
			obj[char] = ++obj[char] || 1;
		}
	}
	return obj;
}

// So the end result is this:
function charCount(str) {
	var obj = {};
	for (var char of str) {
		if (isAlphaNumeric(char)) {
			char = char.toLowerCase();
			obj[char] = ++obj[char] || 1;
		}
	}
	return obj;
}

// Regular expressions are usually very slow operations and some times there are issues with them
// or performance is dependign on the browser used etc.
// So we are going to improve our method by using the ASCII codes of the chars and then replace
// the regex with this function.
function isAlphaNumeric(char) {
	if (
		!(code > 47 && code < 58) && // numeric (0-9)
		!(code > 64 && code < 91) && // upper alpha (A-Z)
		!(code > 96 && code < 123) // lower alpha (a-z)
	) {
		return false;
	}
	return true;
}
