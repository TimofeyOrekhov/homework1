// Задание 1
let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');

function minNum(a, b) {
    return Math.min(a, b);
}
let result = minNum(num1, num2);

alert(`Минимальное число: ${result}`);


// Задание 2
let num3 = +prompt('Введите число');

function checkEvenNum(num) {


    if (num % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

let resultCheck = checkEvenNum(num3);

alert(resultCheck);


// Задание 3
let num4 = +prompt('Введите число');

function squareNum(num) {
    console.log(num ** 2);
}

squareNum(num4);

let num5 = +prompt('Введите число');
function returnSquareNum(num) {
    return num ** 2;
}

let result2 = returnSquareNum(num5);

console.log(result2);

// Задание 4

let ageUser = +prompt('Сколько вам лет?');

function greetUser(age) {

    if (isNaN(age)) {
        alert('Ошибка: Введите число');
        return;
    }


    if (age < 0) {
        alert('Вы ввели неправильное значение');
        return;
    }

    if (age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
    console.log(age);
}

greetUser(ageUser);

// Задание 5

function multiplyNumbers(a, b) {
    let num1 = Number(a);
    let num2 = Number(b);

    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом.';
    }
    return num1 * num2;
}

let input1 = prompt('Введите первое число:');
let input2 = prompt('Введите второе число:');

alert(multiplyNumbers(input1, input2));

// Задание 6

let num6 = prompt('Введите число');


function cubeNumber(num) {

    if (isNaN(num)) {
        return 'Переданный параметр не является числом';
    }
    return `n в кубе ровняется ${num ** 3}`;
}

alert(cubeNumber(num6));

// Задание 7



function Circle(radius) {
    this.radius = radius;

    this.getArea = function () {
        return Math.PI * this.radius ** 2;
    };

    this.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
}

let circle1 = new Circle(5);
let circle2 = new Circle(10);

console.log(`Площадь круга 1: ${circle1.getArea().toFixed(4)}`);
console.log(`Периметр круга 1: ${circle1.getPerimeter().toFixed(4)}`);

console.log(`Площадь круга 2: ${circle2.getArea().toFixed(4)}`);
console.log(`Периметр круга 2: ${circle2.getPerimeter().toFixed(4)}`);
