const { exec } = require('child_process');

// Ð’Ð¸ÐºÐ¾Ð½ÑƒÑ”Ð¼Ð¾ ÐºÐ¾Ð¼Ð°Ð½Ð´Ñƒ Ð´Ð»Ñ Ð¾Ñ‚Ñ€Ð¸Ð¼Ð°Ð½Ð½Ñ Ñ–Ð¼ÐµÐ½Ñ– ÐºÐ¾Ñ€Ð¸ÑÑ‚ÑƒÐ²Ð°Ñ‡Ð°
exec('git config user.name', (error, stdout, stderr) => {
 
    const githubUsername = stdout.trim();
    console.log(`Hello, ${githubUsername}`);
console.log(`hello user, ${githubUsername}`);
});

