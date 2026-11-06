const mobileMenu = document.getElementById('menu-toggle');

const navLinks = document.queryselector('.nav-links');

mobileMenu.addEventListener('click',()=> {
     navLinks.classList.toggle('active');
})