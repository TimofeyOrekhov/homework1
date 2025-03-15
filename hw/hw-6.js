// Задание 1

const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 10) {
        break;
    }
    console.log(arr[i]);
}


// Задание 2

const indexFour = arr.indexOf(4);

console.log(indexFour);


// Задание 3

const arrJoin = [1, 3, 5, 10, 20];

console.log(arrJoin.join(' '));


// Задание 4

const matrix = [];

for (let i = 0; i < 3; i++) {
    matrix[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix[i][j] = 1;
    }
}


console.log(matrix);


// Задание 5

const arrPush = [1, 1, 1];

arrPush.push(2, 2, 2);
console.log(arrPush);


// Задание 6
let arrSort = [9, 8, 7, 'a', 6, 5];
let filteredArr = arrSort.sort((a, b) => a - b).filter(item => item !== 'a');
console.log(filteredArr);


// Задание 7

const guesArr = [9, 8, 7, 6, 5];
let userGuess = +prompt('Угадайте число от 1 до 10:');

if (isNaN(userGuess)) {
    alert('Введите число!');
} else {
    if (guesArr.includes(userGuess)) {
        alert('Вы угадали!');
    } else {
        alert('Вы не угадали!');
    }
}


// Задание 8

let strReversed = 'fedcba'
strReversed = strReversed.split('').reverse().join('');

console.log(strReversed);


// Задание 9

const arr1 = [[1, 2, 3], [4, 5, 6]];

const arrSpread = arr1.flat();
console.log(arrSpread);


// Задание 10

const arr3 = [];

for (let i = 0; i < 10; i++) {
    arr3.push(Math.floor(Math.random() * 10 + 1));
}

console.log(`Сгенерированный массив '${arr3}'`); // Добавил для наглядности

for (let i = 0; i < arr3.length - 1; i++) {
    let sum = arr3[i] + arr3[i + 1];
    console.log(sum);
}


// Задание 11

const arr4 = [];

for (let i = 0; i < 5; i++) {
    arr4.push(Math.floor(Math.random() * 10 + 1));
}

function arrSqre(arr) {
    return arr.map(num => num * num);
}

console.log(`Сгенерированный массив '${arr4}'`); // Добавил для наглядности
console.log(arrSqre(arr4));


// Задание 12

const wordsArr = ["Тестируй", "всё", "даже", "то", "что", "кажется", "очевидным"];

function wordsLength(words) {
    return words.map(words => words.length);
}

console.log(wordsLength(wordsArr));


// Задание 13

const arr5 = [1, -2, 3, -4, 5];

function getNegativeNum(arr) {
    return arr.filter(num => num < 0);
}

console.log(getNegativeNum(arr5));


// Задание 14

const arrRandom = [];

for (let i = 0; i < 10; i++) {
    arrRandom.push(Math.floor(Math.random() * 11));
}

const evenNum = arrRandom.filter(num => num % 2 === 0);

console.log(arrRandom);
console.log(evenNum);



// Задание 15
const arrRandom2 = [];

for (let i = 0; i < 6; i++) {
    arrRandom2.push(Math.floor(Math.random() * 10 + 1));
}

const sum = arrRandom2.reduce((acc, num) => acc + num, 0);

const middle = sum / arrRandom2.length;

console.log(arrRandom2); // Добавил для наглядности
console.log(middle); 