let menuIcon = document.getElementById("menu")
const navLinks = document.querySelectorAll("#nav a");
let nav = document.getElementById("nav")

menuIcon.addEventListener("click", () => {
    nav.style.display == "block" ? nav.style.display = "none" : nav.style.display = "block"
})

// close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= "768")
            nav.style.display = "none"
    });
});

let select = document.getElementById("service-change")
let current = "full-house-wiring";
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

//counters
let counter1 = document.getElementById("counter1")
let count1 = 1
setInterval(() => {
    counter1.innerText = count1
    if (count1 < 22) {
        count1++
    }
}, 100)

let counter2 = document.getElementById("counter2")
let count2 = 1
setInterval(() => {
    counter2.innerText = count2
    if (count2 < 200) {
        count2++
    }
}, 10)


