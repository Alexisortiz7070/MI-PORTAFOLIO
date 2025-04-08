// Detectar scroll y activar animaciones
const elements = document.querySelectorAll('.scroll-animate');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function scrollAnimation() {
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('fadeInUp');
        }
    });
}

window.addEventListener('scroll', scrollAnimation);

// Llamar a la función de inmediato por si la página ya está cargada y algunas secciones están visibles
scrollAnimation();