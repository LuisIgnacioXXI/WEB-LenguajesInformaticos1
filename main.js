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

const formulario = document.getElementById("formContacto");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("formNombre").value.trim();
    const email = document.getElementById("formEmail").value.trim();
    const programa = document.getElementById("formPrograma").value;
    const mensaje = document.getElementById("formMensaje").value.trim();

    if(nombre === "" || email === "" || programa === "" || mensaje === ""){
        event.preventDefault();
        alert("Debe completar todos los campos.");
    }

    
});

