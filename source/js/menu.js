'use strict';

(function () {
  var container = document.querySelector('.page-header__logo-wrapper');
  var button = document.querySelector('.page-header__menu-toggle');
  var menu = document.querySelector('.main-nav');

  var menuToggle = function () {
    container.classList.remove('page-header__logo-wrapper--no-js');

    button.classList.remove('page-header__menu-toggle--no-js');

    button.addEventListener('click', function () {
      menu.classList.toggle('main-nav--closed');

      if (menu.classList.contains('main-nav--closed')) {
        button.style.backgroundImage = 'url("img/icon-mobile-menu.svg")'
      } else {
        button.style.backgroundImage = 'url("img/icon-close.svg")'
      }
    })
  };

  menuToggle();
})();
