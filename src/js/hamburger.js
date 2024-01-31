document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    const bars = document.querySelectorAll('.bar');
    const header = document.querySelector('header');

    hamburgerMenu.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('active');
        nav.classList.toggle('active');
        header.classList.toggle('header-active');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
            hamburgerMenu.classList.remove('active');
            header.classList.remove('header-active');
        }
    });
});
