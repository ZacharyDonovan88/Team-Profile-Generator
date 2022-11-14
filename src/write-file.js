const fs = require('fs');

const writeFile = (fileContent) => {
	fs.writeFile('./dist/index.html', fileContent, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log("Congratulations! Your team profile file was successful and has been generated!");
		}
	});
};

module.exports = writeFile;