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

