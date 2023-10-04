function isPalindrome(word) {
  // Write your algorithm here
  const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();

  // Reverse the cleaned word
  const reversedWord = cleanWord.split('').reverse().join('');

  // Compare the cleaned word with its reverse
  return cleanWord === reversedWord;
}

/* 
  Add your pseudocode here
  1.Define a function isPalindrome that takes a single argument, "word."
  2.Clean the input word by removing any non-alphabetical characters (using a regular expression) and converting it to lowercase.
  3.Reverse the cleaned word by splitting it into an array of characters, reversing the array, and joining the characters back together.
  4.Compare the cleaned word with its reverse.
  5.If the cleaned word and its reverse are the same, return true (indicating it's a palindrome); otherwise, return false (indicating it's not a palindrome).

*/

/*
  Add written explanation of your solution here
  1.The function first cleans the input word by removing any characters that are not letters (using a regular expression) and converting it to lowercase.
  2.It then reverses the cleaned word by splitting it into an array of characters, reversing the array, and joining the characters back together.
  3.Finally, it compares the cleaned word with its reverse. If they are the same, it means the word is a palindrome, and the function returns true; otherwise, it returns false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
