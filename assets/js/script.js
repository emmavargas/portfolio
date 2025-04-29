document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return; // Evita errores si el elemento no existe

        const headerHeight = document.querySelector('header').offsetHeight;
        const elementOffsetTop = targetElement.offsetTop;

        // Calcula la posición para que el elemento quede justo debajo del header
        const scrollPosition = elementOffsetTop - headerHeight;

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    });
});