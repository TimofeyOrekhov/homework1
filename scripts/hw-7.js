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