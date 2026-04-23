let menuIcon = document.getElementById("menu")
const navLinks = document.querySelectorAll("#nav a");
let nav = document.getElementById("nav")

menuIcon.addEventListener("click", () => {
    nav.style.display == "block" ? nav.style.display = "none" : nav.style.display = "block"
})

// close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.style.display = "none"
    });
});

let select = document.getElementById("service-change")
let current = "electrical-systems-installation";
changeTab(current)

select.addEventListener("change", () => {
    changeTab(select.value)
})

function changeTab(current) {
    if (current == "full-house-wiring") {
        document.getElementById("a").style.display = "block"
        document.getElementById("b").style.display = "none"
        document.getElementById("c").style.display = "none"
        document.getElementById("d").style.display = "none"
    }
    if (current == "inverter-setup") {
        document.getElementById("a").style.display = "none"
        document.getElementById("b").style.display = "block"
        document.getElementById("c").style.display = "none"
        document.getElementById("d").style.display = "none"
    }
    if (current == "electrical-systems-installation") {
        document.getElementById("a").style.display = "none"
        document.getElementById("b").style.display = "none"
        document.getElementById("c").style.display = "block"
        document.getElementById("d").style.display = "none"
    }
    if (current == "repair-maintenance") {
        document.getElementById("a").style.display = "none"
        document.getElementById("b").style.display = "none"
        document.getElementById("c").style.display = "none"
        document.getElementById("d").style.display = "block"
    }
}


