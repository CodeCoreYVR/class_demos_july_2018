const fs = require("fs");

const text = `
Things to write in a file.
This is just the noise from my 🧠.

Magna anim deserunt mollit esse sunt fugiat et excepteur proident qui voluptate. Pariatur voluptate ex in Lorem proident in nulla. Magna enim consequat elit mollit ut ad deserunt et quis. Et ipsum deserunt sit laborum voluptate eu cupidatat. Proident officia ea duis aliquip anim. Non quis officia consectetur et occaecat nulla sit ea. Sint dolore fugiat aliqua in est mollit dolore do ea ea ipsum minim occaecat tempor.
`;

fs.writeFile("noiseFromBrain.txt", text, err => {
  if (err) throw err;

  console.log("File saved!");
});
