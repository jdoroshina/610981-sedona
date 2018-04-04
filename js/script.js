(function () {
  var link = document.querySelector(".booking-search-button");
  var form = document.querySelector(".modal-form");
  var login = form.querySelector("#checkin");
  var password = form.querySelector("#checkout");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("modal-form-show");
    if (form.classList.contains("modal-error")) {
      form.classList.remove("modal-error");
    }
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
      evt.preventDefault();
      form.classList.remove("modal-error");
      form.offsetWidth = form.offsetWidth;
      form.classList.add("modal-error");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (form.classList.contains("modal-form-show")) {
        evt.preventDefault();
        form.classList.remove("modal-form-show");
        form.classList.remove("modal-error");
      }
    }
  });
})();

ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
  myMap = new ymaps.Map("map", {
    center: [34.87308363, -111.77274849],
    zoom: 7
  });

  myPlacemark = new ymaps.Placemark([34.87308363, -111.77274849], {
    hintContent: 'Седона!',
    balloonContent: 'Седона'
  });

  myMap.geoObjects.add(myPlacemark);
}