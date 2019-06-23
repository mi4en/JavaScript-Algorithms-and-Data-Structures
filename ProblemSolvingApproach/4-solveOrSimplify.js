// 1.Find the core difficulty in the task ahead
// 2.Temporarily ignore that difficulty
// 3.Write a simplified solution
// 4.Then incorporate that difficulty back in

// Lets use our charCount function and we have condition that we need to count only
// alphanumeric chars and ignore case (not count "H" and "h" separately for example)

function charCount(str) {
	// make object to return
	var result = {};
	// loop over string, for each char...
	for (var i = 0; i < str.length; i++) {
		var char = str[i].toLowerCase();
	}
	// skip chars if there are conditions - only letters, or no spaces etc.
	// we skip this because we don't know how to do it at the moment
	// if the char is key in the object increment value
	if (result[char] > 0) {
		result[char]++;
	}
	// if the char is not in the object, add it and set value to 1
	else {
		result[char] = 1;
	}
	// return object at end
	return result;
}
