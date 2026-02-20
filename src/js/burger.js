// Burger menu
const burgerBtn = document.querySelector('.burger');
const navMenu = document.querySelector('.header__nav');

burgerBtn?.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger--active');
  navMenu.classList.toggle('header__nav--open');
});

// Close menu on nav link click
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    burgerBtn.classList.remove('burger--active');
    navMenu.classList.remove('header__nav--open');
  });
});
