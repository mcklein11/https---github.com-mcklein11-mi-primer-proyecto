const header= document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navegacion = document.querySelector(".navegacion");

window.addEventListener("scroll",()=>{
header.classList.toggle('sticky', this.scrollY>80);
});

menu.onclick = () =>{
menu.classList.toggle("bx-x");
navegacion.classList.toggle("open");
}

window.onscroll= () =>{
    menu.classList.remove("bx-x");
    navegacion.classList.remove ("open");
}