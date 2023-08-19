const os = require("os");
const freeMemory = os.freemem();
console.log(freeMemory);

const obj = {
	type: os.type(),
	user: os.userInfo(),
};

console.log(obj);
