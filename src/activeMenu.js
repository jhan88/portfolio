'use strict';

// Activate the menu corresponding to the first intersecting section
const sectionIdList = [
  '#home',
  '#about',
  '#web-dev',
  '#calligraphy',
  '#contact',
];
const menuItemList = sectionIdList.map((id) =>
  document.querySelector(`[href="${id}"]`)
);

const sectionList = sectionIdList.map((id) => document.querySelector(id));

const isIntersectingList = sectionIdList.map(() => false);

const options = { rootMargin: '-20% 0px 0px 0px', threshold: 0.1 };

const observer = new IntersectionObserver(observerCallback, options);

sectionList.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  entries.forEach((entry) => {
    const callbackIndex = sectionList.indexOf(entry.target);
    isIntersectingList[callbackIndex] = entry.isIntersecting;
  });
  handleMenuActivation();
}

function handleMenuActivation() {
  let activeMenuItem = document.querySelector('.header__menu__item.active');
  if (activeMenuItem) activeMenuItem.classList.remove('active');

  activeMenuItem = isIntersectingList[sectionIdList.length - 1]
    ? menuItemList[sectionIdList.length - 1]
    : menuItemList[isIntersectingList.indexOf(true)];

  activeMenuItem.classList.add('active');
}
