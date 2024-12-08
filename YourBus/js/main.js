
document.addEventListener('DOMContentLoaded', () => {

    const nombreUsuario = localStorage.getItem('usuario');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    const loginLogoutLink = document.getElementById('loginLogout');
 

   if (nombreUsuario) {
        document.getElementById('nombreUsuario').textContent = nombreUsuario;
    }

 

    if (isLoggedIn === 'true') {
        loginLogoutLink.textContent = 'Cerrar sesión';
        loginLogoutLink.href = '#';
        loginLogoutLink.addEventListener('click', function(event) {
            event.preventDefault();
            // Cerrar sesión
            localStorage.removeItem('usuario');
            localStorage.removeItem('isLoggedIn');
            window.location.href = 'IniciarSesion.html';
        });
    }
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});