const index = require("./first/index.js");
console.log(index.func());

//core modules
//built-in modules
const fs = require("fs");
fs.writeFileSync("intro.txt", "This is the intro of the node");

const data = require("./example.js");
console.log(data);
