// Task 4-6: Create an array of objects ("things") with corrected category spellings
const npmThings = [
  {
    category: "Animals & Fun",
    packageName: "cat-ascii-faces",
    explanation:
      "The NPMJS website where you can find fun utility packages like 'cat-ascii-faces'.", // Added missing comma
    published: "Originally published over 9 years ago.",
  },
  {
    category: "Terminal Art",
    packageName: "cat-me",
    explanation:
      "Another interesting cat-themed package on NPMJS is 'cat-me', which randomizes and prints full ASCII cat art directly into your command line.",
    published:
      "Published several years ago and serves as a classic example of community-driven, playful code sharing.",
  },
];

// Task 7: Add console.log to display the array of objects
console.log("NPM Cat Things");
console.log(npmThings);
