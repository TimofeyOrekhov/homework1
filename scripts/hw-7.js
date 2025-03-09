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

// Задание 8, 9 

let currentDate = new Date();

console.log(currentDate.toLocaleDateString('ru-RU'));

let futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log(futureDate.toLocaleDateString('ru-RU'));

// Задание 10
function formatDate(date) {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    const days = [
        "воскресенье", "понедельник", "вторник", "среда",
        "четверг", "пятница", "суббота"
    ];

    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = days[date.getDay()]; 


    const hours = String(date.getHours()).padStart(2, '0'); 
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

currentDate = new Date();
console.log(formatDate(currentDate));