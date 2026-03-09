document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');

    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.querySelector('#name').value.trim();

        alert(`Bedankt ${name || 'heel erg'}, je bericht is ontvangen!\n
        Dit is een voorbeeldwebsite, er wordt niets verzonden.`);
        form.reset();
    });
});