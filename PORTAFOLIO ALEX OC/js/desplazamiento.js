// Desplazamiento suave al hacer clic en el menú de navegación
const links = document.querySelectorAll('.scroll-link');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60, // Ajustamos el offset para el menú fijo
            behavior: 'smooth'
        });
    });
});