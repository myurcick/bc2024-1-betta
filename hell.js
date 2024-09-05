const { exec } = require('child_process');

// Виконуємо команду для отримання імені користувача
exec('git config user.name', (error, stdout, stderr) => {
  // if (error) {
    //   console.error(`Помилка: ${error.message}`);
    //  return;
   // }
   // if (stderr) {
       // console.error(`Помилка: ${stderr}`);
      // return;
    const githubUsername = stdout.trim();
    console.log(`Hello, ${githubUsername}`);
});

