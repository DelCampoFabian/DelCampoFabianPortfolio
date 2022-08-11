
const navToggle = document.querySelector (".nav__toggle")
const navEnlaces = document.querySelector(".nav__enlaces")
const navClose = document.querySelector (".nav__close")
const navLinks = document.querySelectorAll(".nav__links")

if (navToggle){
    navToggle.addEventListener("click", ()=>{
        navEnlaces.classList.add("navToggle-visible")
        navClose.classList.add ("navClose-visible")
        navToggle.classList.add("navToggle-ocultar")
    })
}

if (navClose){
    navClose.addEventListener("click", () => {
        navEnlaces.classList.remove("navToggle-visible")
        navToggle.classList.remove("navToggle-ocultar")
        navClose.classList.remove ("navClose-visible")
    })
}

const navLink = () => {
    navEnlaces.classList.remove("navToggle-visible")
    navToggle.classList.remove("navToggle-ocultar")
    navClose.classList.remove ("navClose-visible")
}
navLinks.forEach((accion) => {
    accion.addEventListener("click", navLink)
})

