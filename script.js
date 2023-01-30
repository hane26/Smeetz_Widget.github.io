// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0) // add shadow class when scrollY > 0
})


//  of a calculator