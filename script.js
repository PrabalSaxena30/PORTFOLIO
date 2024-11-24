document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation on scroll
    const sections = document.querySelectorAll('.fade-in');

    const onScroll = () => {
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const elementTop = section.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                section.classList.add('visible');
            }
        });

        // Show Back-to-Top Button
        const backToTop = document.getElementById('back-to-top');
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    };

    document.addEventListener('scroll', onScroll);
    onScroll(); // Run once on load

    // Back-to-Top Button Click
    const backToTop = document.getElementById('back-to-top');
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
