// Mensagem de boas-vindas no console
console.log("%c🦅 Rota Dev - Portfólio de Dr. Hilquias Almeida carregado com sucesso!", "color: #58a6ff; font-weight: bold; font-size: 14px;");

document.addEventListener("DOMContentLoaded", function() {
    // Animação de Surgimento Suave (Fade-in ao rolar a página)
    const elementos = document.querySelectorAll('.profile-container, .hero-content, .section, .skill-card, .project-card');

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
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elementos.forEach(el => {
        observer.observe(el);
    });

    // Gerenciamento do Pop-up da LGPD
    const lgpdConsent = localStorage.getItem("lgpd_consent");
    if (!lgpdConsent) {
        criarBannerLGPD();
    }
});

function criarBannerLGPD() {
    const banner = document.createElement("div");
    banner.id = "lgpd-banner";
    banner.innerHTML = `
        <div class="lgpd-text">
            <p>Utilizamos cookies e tecnologias semelhantes para otimizar sua experiência. Em conformidade com a <strong>LGPD</strong>, você pode gerenciar suas preferências de privacidade.</p>
        </div>
        <div class="lgpd-buttons">
            <button class="lgpd-btn btn-reject" id="lgpd-rejeitar">Rejeitar</button>
            <button class="lgpd-btn btn-customize" id="lgpd-aperfeicoar">Aperfeiçoar</button>
            <button class="lgpd-btn btn-accept" id="lgpd-aceitar">Aceitar Todos</button>
        </div>
    `;
    document.body.appendChild(banner);

    document.getElementById("lgpd-aceitar").addEventListener("click", function() {
        localStorage.setItem("lgpd_consent", "accepted");
        fecharBanner(banner);
    });

    document.getElementById("lgpd-rejeitar").addEventListener("click", function() {
        localStorage.setItem("lgpd_consent", "rejected");
        fecharBanner(banner);
    });

    document.getElementById("lgpd-aperfeicoar").addEventListener("click", function() {
        alert("Painel de Preferências de Privacidade:\n\n[x] Cookies Essenciais e de Sessão (Obrigatórios)\n[ ] Cookies Analíticos de Desempenho\n\nSuas preferências foram salvas com sucesso!");
        localStorage.setItem("lgpd_consent", "customized");
        fecharBanner(banner);
    });
}

function fecharBanner(banner) {
    banner.classList.add("hidden");
    setTimeout(() => {
        banner.remove();
    }, 400);
}
