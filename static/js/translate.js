// Script dedicado ao Tradutor Global (Google Translate)
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'pt',
        includedLanguages: 'en,es,fr,de,pt', // Idiomas suportados para recrutadores e clientes globais
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

// Carrega o script oficial do tradutor dinamicamente no cabeçalho
(function() {
    const translateScript = document.createElement('script');
    translateScript.type = 'text/javascript';
    translateScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(translateScript);
})();
