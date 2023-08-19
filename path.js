const path = require("path");

console.log(__filename);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.join("/hello", "/hello", "file.txt"));
