/*в первом параграфе массив перебирается, т.к. более 1 кнопки\ссылки 
на открытие карты на странице*/

var button = document.querySelectorAll(".contacts-button-map");
button.forEach(function (entry) {
  entry.addEventListener("click", function (event){
    event.preventDefault();
    popupmap.classList.add("modal-show");
  });
});


var popupmap = document.querySelector(".modal-map");
var closemap = popupmap.querySelector(".modal-close");


closemap.addEventListener("click", function (evt) {
  evt.preventDefault(); 
  popupmap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupmap.classList.contains("modal-show")) {
      evt.preventDefault();
      popupmap.classList.remove("modal-show");
    }
  }
});