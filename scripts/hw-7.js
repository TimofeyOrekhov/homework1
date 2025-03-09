// Задание 1

let upCaseText = 'js';
let result = upCaseText.toUpperCase();
console.log(result);

// Задание 2
const words = [
    "книга", "стол", "окно", "дверь", "стул",
    "лампа", "часы", "зеркало", "диван", "шкаф",
    "кровать", "полка", "ковер", "люстра", "подушка"
];



function filterStringsStartingWith(words, prefix) {
    const lowerPrefix = prefix.toLowerCase();
    const result = [];

    for (const word of words) {
        const lowerWord = word.toLowerCase();

        if (lowerWord.startsWith(lowerPrefix)) {
            result.push(word);
        }
    }

    return result;
}

//проверка
console.log(filterStringsStartingWith(words, "а")); //пустой массив
console.log(filterStringsStartingWith(words, "к")); //массив начинается на "к"
console.log(filterStringsStartingWith(words, "Л")); //массив начинается на "Л" верхний регистр

// Задание 3

let roundingNum = 32.58884;

console.log(Math.floor(roundingNum));
console.log(Math.ceil(roundingNum));
console.log(Math.round(roundingNum));

// Задание 4

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// Задание 5

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(getRandomNumber());

// Задание 6
//Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.

function generateRandomArray(n) {
    if (n <= 0) {
        return [];
    }

    const arrayLength = Math.floor(n / 2);
    const result = [];

    for (let i = 0; i < arrayLength; i++) {
        result.push(getRandomNumber());
    }

    return result;
}

console.log(generateRandomArray(16));

// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomNumberInRange(5, 28));

// Задание 8
let currentDate = new Date().toLocaleDateString('ru-RU');
console.log(currentDate);