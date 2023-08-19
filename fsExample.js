const fs = require("fs");

// fs.readFile("intro.txt", "utf-8", (err, data) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data);
// 	}
// });

// const fileContent = fs.readFileSync("intro.txt", "utf-8");
// console.log(fileContent);

// fs.writeFile("example.txt", "Welcome to node js class", (err, data) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	} else {
// 		console.log(data);
// 	}
// });

// fs.mkdir("new_Dir", (err) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
// 	console.log("Directory created");
// });

fs.rmdir("new_Dir", (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("Directory created");
});
