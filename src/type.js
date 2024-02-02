'use strict';

if (window.innerWidth > 450) {
  new TypeIt('.home__description', { loop: true, speed: 80 })
    .pause(2000)
    .delete()
    .go();
} else {
  document.querySelector('.home__description').innerHTML = '';

  new TypeIt('.home__description', { loop: true, speed: 80 })
    .type('a web developer')
    .pause(1000)
    .delete()
    .type('a calligrapher')
    .pause(1000)
    .delete()
    .type('a life explorer!')
    .pause(2000)
    .delete()
    .go();
}
