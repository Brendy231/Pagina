const boton = document.getElementById("hamburguesa");
const menu = document.getElementById("menu");

boton.addEventListener("click", () => {
  menu.classList.toggle("oculto");
});