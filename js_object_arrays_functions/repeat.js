function repeat(string, repeatCount) {
  let result = '';
  for(let i = 0; i < repeatCount; i += 1) {
    result += string;
  }
  return result;
}