// 1. Menú de Navegación Móvil
const navSlide = () => {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        burger.classList.toggle('toggle');
    });
}

// 2. Animaciones al hacer scroll (Fade In)
const scrollAnimations = () => {
    const faders = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.15, // El elemento aparece cuando el 15% es visible
        rootMargin: "0px 0px -50px 0px" // Margen para que anime un poco antes del borde inferior
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('show');
                appearOnScroll.unobserve(entry.target); // Deja de observar una vez que ya apareció
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
}

// 3. Lógica del Modal del Código QR
const qrModalFunctionality = () => {
    const qrImg = document.getElementById('qrCodeImg');
    const modal = document.getElementById('qrModal');
    const closeModal = document.getElementById('closeModal');

    // Abrir Modal
    qrImg.addEventListener('click', () => {
        modal.classList.add('show-modal');
    });

    // Cerrar Modal con el botón X
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show-modal');
    });

    // Cerrar Modal haciendo clic fuera de la imagen
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show-modal');
        }
    });
}

// Ejecutar funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    scrollAnimations();
    qrModalFunctionality();
});