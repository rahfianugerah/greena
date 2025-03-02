// gitOperations.js
const { execSync } = require('child_process');

function gitAdd(filePath) {
  execSync(`git add ${filePath}`);
}

function gitCommit(message, date) {
  execSync(`git commit -m "${message}" --date="${date}"`);
}

function gitPush() {
  return execSync('git push', { encoding: 'utf-8' });
}

module.exports = { gitAdd, gitCommit, gitPush };
