// задание 1

let password = 'qwerty123';
let passUser = prompt('Введите пароль');


if (password === passUser) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// задание 2

let c = 6;


if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// задание 3

let d = 120;
let e = 50;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// задание 4

let a = '2';
let b = '3';

alert(Number(a) + Number(b));

// задание 5

let monthNumber = 12;

if (monthNumber >= 1 && monthNumber <= 12) {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
    }
} else {
    console.log('Некорректный номер месяца');
}


// доп. задание 1

let userInput = prompt("Пожалуйста, введите любое число");
let number = Number(userInput);

if (!isNaN(number)) {
    if (number % 2 === 0) {
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
} else {
    alert("Ошибка! Введите корректное число.");
}

// доп. задание 2


let clientOS = 1; 

if (clientOS === 0) {
    console.log("Установите версию приложения для iOS по ссылке");
} else {
    console.log("Установите версию приложения для Android по ссылке");
}

// доп. задание 3




