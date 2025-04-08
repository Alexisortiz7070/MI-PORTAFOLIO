document.getElementById('form-nombre').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const nombre = document.getElementById('nombre').value.trim();

    if (nombre !== "") {
        localStorage.setItem("nombreUsuario", nombre); // Guardar el nombre en localStorage
        window.location.href = "bienvenida.html"; // Redirigir a la página de bienvenida
    } else {
        alert("Por favor ingresa tu nombre");
    }
});