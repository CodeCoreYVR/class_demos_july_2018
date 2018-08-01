function insult(name) {
  return `${name}, you doofus!`;
}

function insult(name) {
  const randomNumber = Math.ceil(Math.random() * 3);
  if(randomNumber === 1) {
    return `${name}, you doofus!`;
  } else if(randomNumber === 2) {
    return `${name}, you dummy!`;
  } else {
    return `${name}, you gumbo!`;
  }
}

function insult(name) {
  const randomNumber = Math.floor(Math.random() * 3);
  const insults = [', you doofus!', 'you dummy!', 'you gumbo!'];
  return `${name}, ${insults[randomNumber]}`;
}