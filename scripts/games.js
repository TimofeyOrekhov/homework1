//Угадай число 

const guessNumberButton = document.getElementById('guessNumberButton');
guessNumberButton.addEventListener('click', playGuessGame)

function playGuessGame() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let userGuess;

    do {
        let game = prompt('Угадайте число от 1 до 100');

        if (game === null || game === '') {
            alert('Игра отменена.');
            return;
        }
        userGuess = parseInt(game);

        if (isNaN(userGuess)) {
            alert('Введите корректное число.');
            continue;
        }
        if (userGuess < randomNumber) {
            alert('Загаданное число больше.');
        } else if (userGuess > randomNumber) {
            alert('Загаданное число меньше.');

        }
    } while (userGuess !== randomNumber);
    alert('Вы угадали!');
}



// Простая арифметика

const simpleArithmeticButton = document.getElementById('simpleArithmeticButton');
simpleArithmeticButton.addEventListener('click', playSimpleArithmetic);


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateTask() {
    const operation = ['+', '-', '*', '/'];
    const operator = operation[getRandomNumber(0, operation.length - 1)];
    let num1;
    let num2;
    let correctAnswer;

    switch (operator) {
        case '+':
            num1 = getRandomNumber(1, 10);
            num2 = getRandomNumber(1, 10);
            correctAnswer = num1 + num2;
            break;

        case '-':
            num1 = getRandomNumber(1, 20);
            num2 = getRandomNumber(1, num1 - 1);
            correctAnswer = num1 - num2;
            break;

        case '*':

            num1 = getRandomNumber(1, 10);
            num2 = getRandomNumber(1, 10);
            correctAnswer = num1 * num2;
            break;

        case '/':
            num2 = getRandomNumber(1, 10);
            correctAnswer = getRandomNumber(1, 10);
            num1 = correctAnswer * num2;
            break;
    }

    return {
        task: `${num1} ${operator} ${num2}`,
        answer: correctAnswer
    };
}



function playSimpleArithmetic() {
    const currentTask = generateTask();
    const userAnswer = prompt(`Решите задачу: ${currentTask.task}`);

    if (userAnswer === null || userAnswer === '') {
        alert('Игра отменена');
        return;
    }

    let userNumber = parseInt(userAnswer);

    if (isNaN(userNumber)) {
        alert('Введите корректное число.');
        return;
    } else if (userNumber === currentTask.answer) {
        alert('Верный ответ!');
    } else {
        alert(`Ошибка! Верный ответ ${currentTask.answer}`);
    }
}


