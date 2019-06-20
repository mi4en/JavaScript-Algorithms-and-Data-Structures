// Simple function that add nums up to N - between 1-4 seconds on my local machine
function addUpTo(n) {
	let sum = 0;
	for (let index = 0; index < n; index++) {
		sum += index;
	}

	return sum;
}
// here we have O(n) meaning that due to the n-dependand count of operations performance (in time) will exponentially grow with n

// Same as the first function but with different syntax - around 0 seconds on my local machine
function addUpTo(n) {
	return n * (n + 1) / 2;
}
// here we have O(1) meaning that due to the constant amount of operations performed regardless of n
// the performance will be pretty same or just to simplify things a constant

// We can see how fast each function performs
var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();

console.log(`Time elapsed: ${(t2 - t1) \ 1000} seconds.`);