// Задание 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort((a, b) => a.age - b.age);


// Задание 2



function isPositive(number) {
    return number > 0;
}

function isMale(person) {
    return person.gender === 'male';
}


function filter(array, ruleFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}


console.log(filter([3, -4, 1, 9], isPositive));

const peopleGender = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(peopleGender, isMale));

// Задание 3
// Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».

function getCurrentDate() {
    const date = new Date();
    const time = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    console.log(time);
    return time;
}

let timerId = setInterval(getCurrentDate, 3000);

setTimeout(() => {
    clearInterval(timerId);
    console.log('30 секунд прошло');
}, 30000);

// Задание 4