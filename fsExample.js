const fs = require("fs");

// Reading file asynchronously
fs.readFile("intro.txt", "utf-8", (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});

// Reading file Synchronously
const fileContent = fs.readFileSync("intro.txt", "utf-8");
console.log(fileContent);

//Create fite
fs.writeFile("example.txt", "Welcome to node js class", (err, data) => {
	if (err) {
		console.log(err);
		return;
	} else {
		console.log(data);
	}
});

// Making new Directory
fs.mkdir("new_Dir", (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("Directory created");
});

// remove directory
fs.rmdir("new_Dir", (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("Directory created");
});
