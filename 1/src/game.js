const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 10) + 1;

console.log("Я загадал число от 1 до 10. Попробуй угадать!");

function askQuestion() {
  rl.question("Твой вариант: ", (answer) => {
    const guess = parseInt(answer, 10);
    
    if (isNaN(guess) || guess < 1 || guess > 10) {
      console.log("Нужно ввести число от 1 до 10!");
      askQuestion();
    } else if (guess === secretNumber) {
      console.log("Ты угадал! Поздравляю!");
      rl.close();
    } else {
      console.log("Не угадал, попробуй ещё раз.");
      askQuestion();
    }
  });
}

askQuestion();