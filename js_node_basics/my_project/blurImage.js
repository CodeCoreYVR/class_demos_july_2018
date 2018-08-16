const jimp = require("jimp");

const [blurRadius, filename] = process.argv.slice(2);

jimp.read(filename, (err, image) => {
  image.blur(parseFloat(blurRadius)).write(`blurred-${filename}`);
});
