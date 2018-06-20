const fs = require('fs');
const path = require('path');

module.exports = {
	getCurrentDirectoryBase: () => {
		return path.basename(process.cwd());
	},

	fileExists: (filePath) => {
    try {
      fs.accessSync(filePath);
      return 1;
    } catch (err) {
      return 0;
    }
  }
};
