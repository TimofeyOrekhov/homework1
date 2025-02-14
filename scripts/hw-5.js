// Задание 1

function minNum(a, b) {
    a = prompt('Введите первое число');
    b = prompt('Введите второе число');

    return Math.min(a, b);
}

alert(minNum());


//Задание 2

function checkEvenNum(num) {
    num = prompt('Введите число');

    if (num % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

alert(checkEvenNum());


// Задание 3


function squareNum(num) {
    num = prompt('Введите число');
    console.log(num ** 2);
}

squareNum();


function returnSquareNum(num) {
    num = prompt('Введите число');
    return num ** 2;
}

let result = returnSquareNum();

console.log(result);

// Задание 4


function greetUser() {
    let age = prompt('Сколько вам лет?');
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

greetUser();

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


function cubeNumber(num) {
    num = prompt('Введите число');
    if (isNaN(num)) {
        return 'Переданный параметр не является числом';
    }
    return `n в кубе ровняется ${num ** 3}`;
}

alert(cubeNumber());

// Задание 7



function Circle(radius) {
    this.radius = radius;

    this.getArea = function() {
        return Math.PI * this.radius ** 2;
    };

    this.getPerimeter = function() {
        return 2 * Math.PI * this.radius;
    };
}

let circle1 = new Circle(5);
let circle2 = new Circle(10);

console.log(`Площадь круга 1: ${circle1.getArea().toFixed(4)}`);
console.log(`Периметр круга 1: ${circle1.getPerimeter().toFixed(4)}`);

console.log(`Площадь круга 2: ${circle2.getArea().toFixed(4)}`);
console.log(`Периметр круга 2: ${circle2.getPerimeter().toFixed(4)}`);
