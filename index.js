const nav = document.querySelector("nav");
const nav = document.querySelector("#nav");

toggler.addEventListener('click', function () {
    nav.classList.toggle("active")
});

const scroll = document.getElementById("scroll");

scroll.addEventListener('click', () => {
    document.querySelector(".get-started").scrollIntoView({ behavior: 'smooth' });
})
