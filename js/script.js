const navToggle = document.querySelector(".menu__toggle");
const navMenu = document.querySelector(".menu__lista");


    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("menu__lista--visible");

    if (navMenu.classList.contains("menu__lista--visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");}
    else {
         navToggle.setAttribute("aria-label", "Abrir menú");}
});