const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');

module.exports = () => {
  clear();
  console.log('\n');
  console.log(
    chalk.red(
      figlet.textSync(' Dashboard  Creator', {
        font: 'ANSI Shadow',
        horizontalLayout: 'fitted',
      })
    )
  );

}