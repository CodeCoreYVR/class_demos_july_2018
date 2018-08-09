function reverse(str) {
  if (str.length <= 1) return str;

  return str.slice(-1) + reverse(str.slice(0, -1));
}

function reverseAlt([first, ...rest]) {
  if (rest.length <= 0) return first;
  return reverseAlt(rest) + first;
}

// reverse("abcd")
// "d" + reverse("abc")
// "d" + ("c" + reverse("ab"))
// "d" + ("c" + ( "b" + reverse("a")))
// "d" + ("c" + ( "b" + ("a")))
