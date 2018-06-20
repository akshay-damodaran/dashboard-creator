const chalk = require('chalk');

const showHeader = require('./util/showHeader');
const files = require('./lib/files.js');

if (!files.fileExists('package.json')) {
  console.log(chalk.red(`Run 'npm init' first!`));
  process.exit();
}

showHeader();
