'use strict';

// Filter calligraphy projects
const calliCategoryList = document.querySelectorAll('.category');
const calliProjectList = document.querySelectorAll(
  '.calligraphy__projects__item'
);

calliCategoryList.forEach((category) => {
  category.addEventListener('click', (event) => {
    const filter = event.target.dataset.filter;
    if (!filter) {
      return;
    }
    handleCategorySelection(filter);
    filterProjects(filter);
  });
});

function handleCategorySelection(filter) {
  calliCategoryList.forEach((category) => {
    filter === category.dataset.filter
      ? category.classList.add('category--selected')
      : category.classList.remove('category--selected');
  });
}

function filterProjects(filter) {
  calliProjectList.forEach((project) => {
    filter === 'all' || filter === project.dataset.type
      ? (project.style.display = 'block')
      : (project.style.display = 'none');

    project.classList.add('slide-out');
    setTimeout(() => {
      project.classList.remove('slide-out');
    }, 100);
  });
}
