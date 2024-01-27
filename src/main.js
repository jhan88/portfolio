// Apply primary background color to Header when the webpage is scrolled down
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

document.addEventListener('scroll', () => {
  window.scrollY > headerHeight
    ? header.classList.add('header--primary')
    : header.classList.remove('header--primary');
});
