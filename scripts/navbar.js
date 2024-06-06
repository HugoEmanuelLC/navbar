let navbar = document.querySelector('nav');
let navbar_content = navbar.querySelector('.content ul');
let btn_navbar_open = document.querySelector('.btn-navbar-open');
let btn_navbar_close = document.querySelector('.btn-navbar-close');

btn_navbar_open.addEventListener('click', () => {
    if (navbar.classList.contains('nav_close')) {
        navbar.classList.remove('nav_close');
        navbar.classList.add('nav_open');
    }
});

btn_navbar_close.addEventListener('click', () => {
    if (navbar.classList.contains('nav_open')) {
        navbar.classList.remove('nav_open');
        navbar.classList.add('nav_close');
    }
});

navbar_content.addEventListener('click', () => {
    if (navbar.classList.contains('nav_open')) {
        navbar.classList.remove('nav_open');
        navbar.classList.add('nav_close');
    }else{
        navbar.classList.remove('nav_close');
        navbar.classList.add('nav_open');
    }
});