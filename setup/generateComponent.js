const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const modulesPath = 'src/components';
const args = process.argv.slice(2);

const error = (...args) => {
  console.log(chalk.red(...args));
};

const success = (...args) => {
  console.log(chalk.green(...args));
};

if (!args.length) {
  error('You must provide a name for the component!');
  return;
}

const moduleName = args[0];
const modulePath = path.join(__dirname, '../', modulesPath, moduleName);

if (fs.existsSync(modulePath)) {
  error(`${moduleName} directory already exists!`);
  return;
}

const stateContent = `export const ${moduleName} = (props) => {
  console.log('${moduleName} Mount!');
}
`;

const statePath = `${path.join(modulePath, `index.js`)}`

fs.mkdirSync(modulePath);
fs.appendFileSync(statePath, stateContent);

success('Component', moduleName, 'generated!');
