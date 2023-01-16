import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
});

 let hotPrice = document.querySelectorAll(".hot");
    for (let i = 0; i < hotPrice.length ; i++) {
        hotPrice[i].innerHTML += '&#128293;';
    }
