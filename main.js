const boton = document.getElementById("btnModoOscuro");

if (localStorage.getItem("modo") === "oscuro") {
    document.body.classList.add("modo-oscuro");
    boton.textContent = "☀️ Modo claro";
}

boton.addEventListener("click", function () {

    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
        boton.textContent = "☀️ Modo claro";
        localStorage.setItem("modo", "oscuro");
    } else {
        boton.textContent = "🌙 Modo oscuro";
        localStorage.setItem("modo", "claro");
    }

})


