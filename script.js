document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.fade-in');

    const onScroll = () => {
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const elementTop = section.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                section.classList.add('visible');
            }
        });
    };

    document.addEventListener('scroll', onScroll);
    onScroll(); // Run once on load
});
