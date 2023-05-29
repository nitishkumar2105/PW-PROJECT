const text = "I m Pankaj Kumar kar pankaj kumar Kar";

// Code For countWords

function countWords(text) {
  const words = text.toLowerCase().split(" ");

  const wordCount = new Map();

  for (const word of words) {
    const count = wordCount.get(word) || 0;
    wordCount.set(word, count + 1);
  }

  return wordCount;
}

const wordCount = countWords(text);

console.log(wordCount);