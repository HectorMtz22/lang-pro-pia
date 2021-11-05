const fs = require("fs");

fs.readFile(process.argv[2], "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let lines = data.split("\n");

  for (let i = 0; i < lines.length; i++) {
    console.log(`<p>${lines[i]}</p>`);
  }
});
