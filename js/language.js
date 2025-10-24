// Función para cambiar el idioma
function changeLanguage(lang) {
    // Actualizar el atributo lang del HTML
    document.documentElement.lang = lang;
    
    // Guardar la preferencia del usuario
    localStorage.setItem('preferredLanguage', lang);
    
    // Actualizar los botones de idioma
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            // Si el elemento es un input con placeholder
            if (element.placeholder) {
                element.placeholder = translations[lang][key];
            } 
            // Si es un elemento normal
            else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Cargar el idioma preferido al iniciar
document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
    changeLanguage(preferredLanguage);
});