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
console.log(filterStringsStartingWith(stringsArray, "а"));
console.log(filterStringsStartingWith(stringsArray, "к"));
console.log(filterStringsStartingWith(stringsArray, "Л"));

// Задание 3