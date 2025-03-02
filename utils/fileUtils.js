// fileUtils.js
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');

function ensureDataDir() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }
}

function logCommit(logPath, text) {
  fs.appendFileSync(logPath, text + '\n');
}

function writeTempFile(tempPath, text) {
  fs.writeFileSync(tempPath, text);
}

module.exports = { ensureDataDir, logCommit, writeTempFile, dataDir };
