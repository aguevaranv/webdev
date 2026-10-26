// Menu hamburguesa para celulares

// Muestra u oculta el menu al presionar el boton
function abrirMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("activo");
}

// Cierra el menu cuando se elige una opcion
const enlaces = document.querySelectorAll(".menu a");

for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener("click", function () {
        document.querySelector(".menu").classList.remove("activo");
    });
}
