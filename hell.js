const { exec } = require('child_process');

// Виконуємо команду для отримання імені користувача
exec('git config user.name', (error, stdout, stderr) => {
 
    const githubUsername = stdout.trim();
    console.log(`Hello, ${githubUsername}`);
console.log(`����� ����������, ${githubUsername}`);
});

