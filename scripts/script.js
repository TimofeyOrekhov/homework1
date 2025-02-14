document.addEventListener('DOMContentLoaded', () => {
    const scrollContent = document.getElementById('scrollContent');

    const originalContent = scrollContent.innerHTML;
    scrollContent.innerHTML += scrollContent.innerHTML;

    let scrollPosition = 0;

    function scrollAnimation() {
        scrollPosition += 1;
        scrollContent.style.transform = `translateX(-${scrollPosition}px)`;

        if (scrollPosition >= scrollContent.scrollWidth / 2) {
            scrollPosition = 0;
        }

        requestAnimationFrame(scrollAnimation);
    }

    scrollAnimation();
});

document.querySelectorAll('.about-games__card').forEach((card) => {
    card.addEventListener('mouseenter', () => {

        card.classList.add('increased');

        const relatedCardId = parseInt(card.id.split('-')[1], 10) + 3;
        const relatedCard = document.getElementById(`card-${relatedCardId}`);

        if (relatedCard) {

            relatedCard.classList.add('decreased');
        }
    });

    card.addEventListener('mouseleave', () => {

        card.classList.remove('increased');

        const relatedCardId = parseInt(card.id.split('-')[1], 10) + 3;
        const relatedCard = document.getElementById(`card-${relatedCardId}`);

        if (relatedCard) {

            relatedCard.classList.remove('decreased');
        }
    });
});


//Угадай число 

const guessNumberButton = document.getElementById('guessNumberButton');
guessNumberButton.addEventListener('click', playGuessGame)

function playGuessGame() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let userGuess;

    do {
        let game = prompt('Угадайте число от 1 до 100');

        if (game === null) {
            alert('Игра отменена.');
            return;
        }
        userGuess = parseInt(game);

        if (isNaN(userGuess)) {
            alert('Введите корректное число.');
            continue;
        }
        if (userGuess < randomNumber) {
            alert('Загаданное число больше.');
        } else if (userGuess > randomNumber) {
            alert('Загаданное число меньше.');

        }
    } while (userGuess !== randomNumber);
    alert('Вы угадали!');
}



//Используйте стандартные окна (alert, prompt) для взаимодействия с пользователем.
//Код должен быть чистым: используйте понятные имена переменных и следуйте стандартам форматирования.
