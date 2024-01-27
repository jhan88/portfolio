// Apply primary background color to Header when the webpage is scrolled down
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

document.addEventListener('scroll', () => {
  window.scrollY > headerHeight
    ? header.classList.add('header--primary')
    : header.classList.remove('header--primary');
});

// Fade out Home depending on the position relative to the viewport
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Make arrow-up visible only when the webpage is scrolled down more than 50% of Home
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
  window.scrollY > 0.5 * homeHeight
    ? arrowUp.classList.add('arrow-up--visible')
    : arrowUp.classList.remove('arrow-up--visible');
});
