// interactive.js
const readline = require('readline');
const { startCommitBot } = require('./commitBot');

function startInteractive() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("Bot: Hello! I am your commit bot.");

  rl.question("Bot: Please enter the start date (YYYY-MM-DD): ", startDateStr => {
    rl.question("Bot: Please enter the end date (YYYY-MM-DD): ", endDateStr => {
      rl.question("Bot: How many commits would you like to make? ", numCommitsStr => {
        const numCommits = parseInt(numCommitsStr, 10);
        if (isNaN(numCommits) || numCommits <= 0) {
          console.error("Bot: Please enter a valid positive number for commits.");
          rl.close();
          return;
        }
        console.log(`Bot: Great! I will make ${numCommits} commits from ${startDateStr} to ${endDateStr}.`);
        startCommitBot(startDateStr, endDateStr, numCommits);
        rl.close();
      });
    });
  });
}

module.exports = { startInteractive };
