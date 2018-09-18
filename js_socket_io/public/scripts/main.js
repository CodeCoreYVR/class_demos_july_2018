const h = (tagName, attributes = {}, children = []) => {
  const node = document.createElement(tagName);

  for (let [name, value] of Object.entries(attributes)) {
    node.setAttribute(name, value);
  }

  if (children instanceof Array) {
    node.append(...children);
  } else {
    node.append(children);
  }

  return node;
};
