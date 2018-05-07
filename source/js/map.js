"use strict";

(function () {
  var map;

  ymaps.ready(function () {
    map = new ymaps.Map(document.querySelector('.contacts__map'), {
      center: [59.938896, 30.323398],
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
