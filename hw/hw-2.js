// Задание 1
let a = 10;
alert(a)
a = 20;
alert(a);

// Задание 2
let iphoneRelease = 2007;
alert(iphoneRelease);

// Задание 3
let creatorNameJS = 'Брэндан Эйх';
alert(creatorNameJS);

// Задание 4

a = 10;
b = 2;

alert("Сумма: " + (a + b));
alert("Разность: " + (a - b));
alert("Произведение: " + (a * b));
alert("Частное: " + (a / b));

// Задание 5
let c = 2;
let result = c ** 5;

alert(result);

// Задание 6
a = 9;
b = 2;
result = a % b;

alert(result);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8
let age = Number(prompt('Сколько вам лет?'));
alert(age);

// Задание 9
let user = {
    name: 'Тимофей',
    age: 33,
    isAdmin: true
};
alert(`Имя: ${user.name}\nВозраст: ${user.age}\nАдмин: ${user.isAdmin}`);


// Задание 10
let userName = prompt('Введите ваше имя');
alert(`Привет, ${userName}!`);


// Дополнительное задание
let number = Number(prompt('Загадайте любое число'));

let doubled = number * 2;
alert("Удвоенное число: " + doubled);

let plusTen = doubled + 10;
alert("Прибавили 10: " + plusTen);

let divided = plusTen / 2;
alert("Разделили на 2: " + divided);

let resultate = divided - number;
alert("Вычли загаданное число: " + resultate);

alert("Ответ всегда равен 5!");