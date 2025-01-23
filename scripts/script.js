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
