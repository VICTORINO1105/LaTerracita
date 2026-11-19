// 1. Efecto de ocultar Navbar al hacer scroll
const navbarScrollEffect = () => {
    let prevScrollpos = window.pageYOffset;
    const navbar = document.getElementById("navbar");

    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        
        // Si subimos (prev > current) o estamos en la parte superior, mostramos el menú
        if (prevScrollpos > currentScrollPos || currentScrollPos < 50) {
            navbar.classList.remove("navbar-hidden");
        } else {
            // Si bajamos, ocultamos el menú
            navbar.classList.add("navbar-hidden");
        }
        prevScrollpos = currentScrollPos;
    }
}

// 2. Menú de Navegación Móvil
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

// 3. Animaciones al hacer scroll (Fade In)
const scrollAnimations = () => {
    const faders = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('show');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
}

// 4. Lógica del Modal del Código QR
const qrModalFunctionality = () => {
    const qrImg = document.getElementById('qrCodeImg');
    const modal = document.getElementById('qrModal');
    const closeModal = document.getElementById('closeModal');

    if(qrImg && modal && closeModal) {
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
}

// 5. Botón de Facebook en construcción
const facebookBoton = () => {
    const fbBtn = document.getElementById('btn-facebook');
    if (fbBtn) {
        fbBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que la página intente cargar otro enlace
            alert("¡Próximamente! Nuestra página de Facebook estará lista muy pronto. Por ahora síguenos en Instagram.");
        });
    }
}

// Ejecutar funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    navbarScrollEffect();
    navSlide();
    scrollAnimations();
    qrModalFunctionality();
    facebookBoton();
});