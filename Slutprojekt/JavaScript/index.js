var Hem = document.getElementById("Hem");
var Sortiment = document.getElementById("Sortiment");
var Oss = document.getElementById("Oss");
var Våra = document.getElementById("Våra");
var Kontakta = document.getElementById("Kontakta");

Hem.addEventListener("click", function() {
  window.scrollTo(0, 0);
});

Sortiment.addEventListener("click", function() {
    window.scrollTo(0, 700);
});

Oss.addEventListener("click", function() {
    window.scrollTo(0, 1500);
});

Våra.addEventListener("click", function() {
    window.scrollTo(0, 1200);
});

Kontakta .addEventListener("click", function() {
    window.scrollTo(0, 3000);
});
