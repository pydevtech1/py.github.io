

const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});
var typed = new Typed(".auto-type",{
  strings : ["Bidas", "Bidas",],
  typeSpeed : 150,
  backSpeed : 150,
  looped : true
})
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
    setTimeout(function () {
      loader.style.display = "none"
    }, 2000);
  });
});