function countChars(string) {
  const chars = string.toLowerCase().split('');
  const result = {};
  for(let char of chars) {
    // we can simplify the one below by doing if(!result[char])
    if(result[char] === undefined) {
      result[char] = 1;
    } else {
      result[char] += 1;
    }
  }
  return result;
}

countChars('');
countChars('hello world');
countChars('hello world and hello CodeCore students');

