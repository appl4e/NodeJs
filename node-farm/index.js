const fs = require("fs");

const textInput = fs.readFileSync("./textfile.txt", "utf8");

console.log(textInput);
