//Задание 1


for (let i = 0; i < 2; i++) {
    console.log("Привет");
}

// Задание 2

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Задание 3


for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// Задание 4

let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов`);
}

// Задание 5

let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}

console.log(`Результат: ${n} Количество итераций: ${num}`);

// Задание 6 

let fridayOfMonth = 4; 

for (let i = 1; i <= 31; i++) {
    if (i % 7 === fridayOfMonth) {
        console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
    }
}


// доп. задание 1


let k = 100;
let iterations = 0;

while (k >= 0) {
    k -= 7;
    iterations++;
}

console.log(iterations);

// доп. задание 2

let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

for (let i = 0; i < months.length; i++) {
    console.log(`${months[i]} - ${i + 1}`);
}

// доп. задание 3

let book = {
    title: 'Гарри Поттер и Методы Рацианального Мышления',
    author: 'Элизар Юдковский',
    year: 2015,
    genre: 'Фэнтези'
};

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

// доп. задание 4

let randomNum = [];

for (let i = 0; i < 10; i++) {
    randomNum[i] = Math.floor(Math.random() * 100);
}

console.log(randomNum); //добавил эту команду, чтобы было нагляднее

let minNum = randomNum[0];

for (let i = 1; i < randomNum.length; i++) {
    if (randomNum[i] < minNum) {
        minNum = randomNum[i];
    }
}

console.log(minNum);
