function wordLengths(sentence) {
  const words = sentence.split(' ');
  const result = {};
  for(let word of words) {
    console.log('>>');
    console.log(word);
    console.log(word.length);
    console.log('>>');
    result[word] = word.length;
  }
  return result;
}


wordLengths("Hello world");
// { "Hello": 5, "world": 5 }
