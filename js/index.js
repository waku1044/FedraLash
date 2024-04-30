const linkNav = document.querySelectorAll(".nav-link");
const collapse = document.querySelector(".collapse");

for(let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener("click", () => {
        collapse.classList.toggle("show");
    })
}   