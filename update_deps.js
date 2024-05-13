const { execSync } = require('child_process');

const outdated = execSync('npm outdated --parseable=true').toString();
const packages = outdated.split('\n').map(line => line.split(':')[0]);

const updateCommand = `npm install ${packages.join(' ')}`;
execSync(updateCommand, { stdio: 'inherit' });