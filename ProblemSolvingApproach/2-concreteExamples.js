// Write a function that takes in a string and returns counts of each character in the string.

// Start with some simple examples
charCount('aaaa'); // {a:4}
charCount('hello'); // {h:1, e:1, l:2, o:1}

// Progress to more complex examples:
charCount('my phone number i$ 12748'); // do we count the nums, or each num count, what about special chars etc...
charCount('Hello hey, there'); // do we ignore casing or count separately small/big letters, what about punctual signs?

// Explore examples with empty/invalid strings
charCount('');
charCount(23);
charCount({ name: 'John', age: 25 }); // basically what should happen if we recieve empty string or invalid input
