const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#menu");
const link = document.querySelectorAll("#menu-link");



hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("menu--active");
    hamburger.classList.toggle("active");
    console.log('Hice click')
});


const closeMenu = () => {
    navMenu.classList.remove("menu--active");
    hamburger.classList.remove("active");
}

link.forEach( l => l.addEventListener('click', closeMenu));
// const mobileMenu = () => {
//     // h
    
// }
