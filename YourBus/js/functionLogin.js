$('.toggle').click(function(){
    $('.form').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");

     // Cambiar la leyenda del span
     if ($('.toggle').text() === "Registrarse") {
        $('.toggle').text("Iniciar sesión");
    } else {
        $('.toggle').text("Registrarse");
    }
});

$('#loginForm').submit(function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const usuario = $('#usuario').val();

    // Guardar el nombre de usuario en localStorage
    localStorage.setItem('usuario', usuario);
localStorage.setItem('isLoggedIn', 'true');

    // Redirigir a la página de inicio
    window.location.href = 'Inicio.html';
});