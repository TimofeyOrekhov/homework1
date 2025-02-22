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