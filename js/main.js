document.addEventListener('DOMContentLoaded', function() {
    // Video background
    const video = document.querySelector('.hero-background');
    if (video) {
        video.playbackRate = 0.7;
    }

    // Configuración del acordeón
    const programCards = document.querySelectorAll('.program-card');
    
    programCards.forEach(card => {
        const header = card.querySelector('.program-header');
        const content = card.querySelector('.program-content');
        const toggle = card.querySelector('.program-toggle');
        
        header.addEventListener('click', () => {
            // Verificar si este acordeón está activo
            const isActive = content.classList.contains('active');
            
            // Primero, cerrar todos los acordeones
            programCards.forEach(otherCard => {
                const otherContent = otherCard.querySelector('.program-content');
                const otherHeader = otherCard.querySelector('.program-header');
                const otherToggle = otherCard.querySelector('.program-toggle');
                
                otherContent.classList.remove('active');
                otherHeader.classList.remove('active');
                otherToggle.style.transform = 'rotate(0deg)';
            });
            
            // Si este acordeón no estaba activo, abrirlo
            if (!isActive) {
                content.classList.add('active');
                header.classList.add('active');
                toggle.style.transform = 'rotate(45deg)';
            }
        });
    });

    // Configuración del botón de WhatsApp
    const whatsappButton = document.getElementById('whatsappButton');
    if (whatsappButton) {
        whatsappButton.href = 'https://wa.me/TU_NUMERO?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20la%20academia%20de%20trading%20profesional.';
    }
});