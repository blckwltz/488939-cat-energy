"use strict";

(function () {
  var inputs = document.querySelectorAll('.form__input');
  var submit = document.querySelector('.form__button');

  submit.addEventListener('click', function () {
    [].forEach.call(inputs, function (input) {
      if (!input.checkValidity()) {
        input.classList.add('form__input--error')
      }
    })
  });

  [].forEach.call(inputs, function (input) {
    input.addEventListener('input', function () {
      if (input.checkValidity()) {
        input.classList.remove('form__input--error')
      }
    })
  })
})();
