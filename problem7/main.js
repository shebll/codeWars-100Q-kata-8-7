// It checks if the word2 differs from word1 by at most one character.
// This can include an extra char at the end or the beginning of either of words.
// In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.

var mispelled = function (word1, word2) {
  const compareArrays = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
  };
  let countWrongLetter = 0;
  let arrW1 = Array.from(word1);
  let arrW2 = Array.from(word2);
  if (arrW1.length == arrW2.length) {
    for (let i = 0; i < arrW1.length; i++) {
      if (arrW1[i] != arrW2[i]) {
        countWrongLetter++;
      }
    }
    return countWrongLetter > 1 ? false : true;
  } else if (arrW1.length < arrW2.length) {
    countWrongLetter++;
    if (
      compareArrays(arrW1, arrW2.slice(0, -1)) ||
      compareArrays(arrW1, arrW2.slice(1))
    ) {
      return true;
    }
  } else if (arrW1.length > arrW2.length) {
    countWrongLetter++;
    if (
      compareArrays(arrW2, arrW1.slice(0, -1)) ||
      compareArrays(arrW2, arrW1.slice(1))
    ) {
      return true;
    }
  }
  return (countWrongLetter = 1 ? false : true);
};

console.log(mispelled("versed", "xersed"));
console.log(mispelled("versed", "applb"));
console.log(mispelled("versed", "v5rsed"));
console.log(mispelled("versed", "versed1"));
console.log(mispelled("versed", "aversed"));
console.log(mispelled("versed", "aaversed"));
console.log(~"word".indexOf("word"));
