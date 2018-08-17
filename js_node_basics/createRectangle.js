const createRectangle = (width, height) => {
  return Array.from({ length: height })
    .map(() => "*".repeat(width))
    .join("\n");
};

module.exports = createRectangle;
