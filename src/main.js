'use strict';

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

// Implement a toggle menu bar for the mobile environment
const menuToggle = document.querySelector('.header__toggle');
const menu = document.querySelector('.header__menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Close the menu bar when clicked
const menuItemList = document.querySelectorAll('.header__menu__item');

menuItemList.forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.remove('open');
  });
});
