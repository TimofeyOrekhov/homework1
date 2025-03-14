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


// Переверни текст

const turnTextOverButton = document.getElementById('turnTextOverButton');
turnTextOverButton.addEventListener('click', playReverseGame);

function reverseText(text) {
    return text.split('').reverse().join('');
}

function playReverseGame() {
    let userText = prompt('Введите текст для переворота');

    while (userText !== null) {
        if (userText === '') {
            alert('Пожалуйста, введите какой-нибудь текст!');
        } else {
            let reversed = reverseText(userText);
            alert('Перевернутый текст: ' + reversed);
        }

        userText = prompt('Введите текст для переворота:');
    }

    alert('Игра отменена');
}

//  Викторина

const playQuizButton = document.getElementById('quizButton');
playQuizButton.addEventListener('click', playQuiz);

const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function playQuiz() {
    let correctCount = 0;

    for (let i = 0; i < quiz.length; i++) {
        let validAnswer = false;
        let userAnswer;

        while (!validAnswer) {
            let questionText = quiz[i].question + "\n" +
                quiz[i].options.join("\n") +
                "\nВведите номер ответа (1-3):";

            userAnswer = prompt(questionText);

            if (userAnswer === null) {
                alert("Игра прервана!");
                return;
            }

            let answerNumber = parseInt(userAnswer);


            if (isNaN(answerNumber) || answerNumber < 1 || answerNumber > 3) {
                alert("Ошибка! Введите число от 1 до 3!");
            } else {
                validAnswer = true;
                if (answerNumber === quiz[i].correctAnswer) {
                    correctCount++;
                    alert("Правильно!");
                } else {
                    alert("Неправильно! Правильный ответ: " + quiz[i].correctAnswer);
                }
            }
        }
    }

    alert(`Викторина завершена!\nПравильных ответов: ${correctCount} из ${quiz.length}`);
}


// Генератор случайных цветов

document.getElementById("randomColorGeneratorButton").addEventListener("click", function () {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector('.mini-games').style.backgroundColor = randomColor;
});
