const nav = document.querySelector("#nav");
const abrir = document-querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListner("click", () =>{
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible")
})