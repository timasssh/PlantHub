const carrousel_controlers = document.querySelectorAll(".carrousel_control");
const divRecomendedProducts = document.querySelector(".produtos");

carrousel_controlers.forEach((controler) => {
    controler.addEventListener("click", () => {
        let directionToScroll = controler.textContent === "+" ? 1 : -1
        let scrollAmount = (divRecomendedProducts.clientWidth / 2) * directionToScroll;
        divRecomendedProducts.scrollBy({left: scrollAmount, behavior: "smooth"});
    });
});

const btnOpenMenu = document.querySelector(".header_menu > img");
const navMenu = document.querySelector("nav");
btnOpenMenu.addEventListener("click", () => {
    navMenu.classList.add("active");
});

const btnCloseMenu = document.querySelector("nav button:nth-child(1)");
console.log(btnCloseMenu)
btnCloseMenu.addEventListener("click", () => {
    navMenu.classList.remove("active");
});