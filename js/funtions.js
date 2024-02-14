function mostrarContenido() {
    var contenido = document.getElementById("contenido");
    var contenido2 = document.getElementById("contenido-2");
    var buttonLeer = document.getElementById("button-leer");

    if (contenido.style.display === "none") {
        var usuario = prompt("Usuario:");
        var contraseña = prompt("Contraseña:");
        if (usuario === "A&M" && contraseña === "090723") {
            contenido.style.display = "block";
            contenido2.style.display = "none";
            buttonLeer.textContent = "Back";
        } else {
            alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
        }

    } else {
        contenido.style.display = "none";
        contenido2.style.display = "block";
        buttonLeer.textContent = "Leer carta";
    }
}
