const string = "abcbdca"
const string2 = "abcbdaac"

// Time O(n^2)
// O(n)
const longestSubstringBruteForce = (string) => {
  if(string.length <= 1) return string.length;

  let longest = 0;

  for(let left = 0; left < string.length; left++) {
    let seenChars = {}, currentLength = 0;

    for(let right = left; right < string.length; right++) {
      const currentChar = string[right];

      if(!seenChars[currentChar]) {
        currentLength++;
        seenChars[currentChar] = true;
        longest = Math.max(longest, currentLength);
      } else {
        break;
      }
    }
  }

  return longest;
}

// Time O(n)
// Space O(n)
const longestSubstring = (string) => {
  if(string.length <= 1) return string.length;

  const seenChars = new Map();
  let left = 0, longest = 0;

  for(let right = 0; right < string.length; right++) {
    const currentChar = string[right];
    const prevSeenChar = seenChars.get(currentChar);

    if(prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }

    seenChars.set(currentChar, right);
    longest = Math.max(longest, right - left + 1)
  }

  return longest;
}

// Expects 4
console.log(longestSubstringBruteForce(string))
console.log(longestSubstringBruteForce(string2))
console.log(longestSubstring(string))
console.log(longestSubstring(string2))
