let menuIcon = document.getElementById("menu")
menuIcon.addEventListener("click", () => {
    let nav = document.getElementById("nav")
    nav.style.display == "block" ? nav.style.display = "none" : nav.style.display = "block"
})