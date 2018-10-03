const QRCode = require("qrcode");

const filename = process.argv[2];
const text = process.argv[3];

// console.log(">>>>>>>>")
// console.log(processargv)
// console.log(argv[2])
// console.log(argv[3])

QRCode.toFile(filename, text, err => {
  console.log(`🤖 "${text}" has been encoded to ${filename}!`);
});
