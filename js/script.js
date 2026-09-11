// Mensagem de boas-vindas no console
console.log("%c🦅 Rota Dev - Portfólio de Dr. Hilquias Almeida carregado com sucesso!", "color: #58a6ff; font-weight: bold; font-size: 14px;");

// Animação de Surgimento Suave (Fade-in ao rolar a página)
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os elementos que vão animar (incluindo a foto de perfil)
    const elementos = document.querySelectorAll('.profile-container, .hero-content, .section, .skill-card, .project-card');

    // Configuração inicial para deixar os elementos invisíveis antes de animar
    elementos.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, {
        threshold: 0.15
    });

    elementos.forEach(el => {
        observer.observe(el);
    });
});
