// NUMERO DE LINEA
const NUMERO_DE_LINEA = '2236049325';

// Mensaje predeterminado
const MENSAJE_WA = encodeURIComponent('¡Hola! Quiero crear un USU4RIO. Mi nombre es:');

// Función para obtener el enlace de WhatsApp
function getWhatsappLink() {
    return `https://wa.me/${NUMERO_DE_LINEA}?text=${MENSAJE_WA}`;
}

// Actualiza el botón en el index.html
window.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('whatsapp-btn');
    if (btn) {
        btn.setAttribute('href', getWhatsappLink());
        btn.setAttribute('target', '_blank');
    }
});
