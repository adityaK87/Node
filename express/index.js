const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
	res.status(404).send("<h1>Not found</h1>");
});

app.get("/contact", (req, res) => {
	res.send("<h1>Contact</h1>");
});

app.get("/files", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/jsonres", (req, res) => {
	res.json([
		{
			firstName: "John",
			lastName: "Doe",
		},
		{
			firstName: "Aditya",
			lastName: "Kumar",
		},
	]);
});

app.get("*", (req, res) => {
	res.sendFile("<h1>Not Found</h1>");
});

app.listen(3000, () => {
	console.log("server is running on port 3000");
});

console.log("Hello world");
