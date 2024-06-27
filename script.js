document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('questionnaire-form');

    form.addEventListener('submit', function(event) {
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;

        if (nombre === '' || email === '') {
            event.preventDefault();
            alert('Por favor, completa todos los campos.');
        }
    });

    // Cambiar tema
    const themeButton = document.getElementById('themeButton');
    themeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
    });
});

