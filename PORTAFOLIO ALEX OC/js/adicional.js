// JavaScript para los formularios de contacto, si deseas agregar validación
document.getElementById('form-contacto').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre-contacto').value;
    const email = document.getElementById('email-contacto').value;
    const mensaje = document.getElementById('mensaje-contacto').value;

    // Verificar que los campos no estén vacíos
    if (nombre && email && mensaje) {
        alert("Mensaje enviado correctamente");
        // Aquí podrías agregar una lógica para enviar el formulario (por ejemplo, a un servidor)
    } else {
        alert("Por favor completa todos los campos");
    }
});