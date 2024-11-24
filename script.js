document.addEventListener('DOMContentLoaded', function () {
    // Select all sections with the fade-in class
    const sections = document.querySelectorAll('.fade-in');

    // Function to handle the fade-in effect
    const onScroll = () => {
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const elementTop = section.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                section.classList.add('visible');
            }
        });
    };

    // Add scroll event listener
    document.addEventListener('scroll', onScroll);
    onScroll(); // Run once on load

    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Smooth Scrolling for Internal Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerOffset = 70; // Height of the header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Responsive Navigation Menu
    const navToggle = document.createElement('button');
    navToggle.textContent = '☰';
    navToggle.classList.add('nav-toggle');
    document.querySelector('header').appendChild(navToggle);

    const navLinks = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Hide navigation links on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});

//* Responsive Navigation Styles */
.nav-toggle {
    display: none;
    background: transparent;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
}

nav ul {
    display: flex;
    flex-direction: row;
}

nav ul.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px; /* Adjust based on header height */
    right: 0;
    background: #007BFF;
    width: 100%;
    z-index: 1000;
}

nav ul li {
    margin: 10px 0;
}

@media (max-width: 768px) {
    nav ul {
        display: none; /* Hide by default on small screens */
    }

    .nav-toggle {
        display: block; /* Show toggle button */
    }
}
