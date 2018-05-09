"use strict";

(function () {
  var map;

  ymaps.ready(function () {
    map = new ymaps.Map(document.querySelector('.contacts__map'), {
      center: [59.938637, 30.323017],
      zoom: 17
    });

    var myPlacemark = new ymaps.Placemark(map.getCenter(), {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin.png',
      iconImageSize: [124, 106]
    });

    map.geoObjects.add(myPlacemark);
  });
})();
