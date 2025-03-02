// index.js
const { ensureDataDir } = require('./utils/fileUtils');
const { startInteractive } = require('./core/interactive');

// Ensure that the data directory exists.
ensureDataDir();

// Start the interactive commit bot.
startInteractive();