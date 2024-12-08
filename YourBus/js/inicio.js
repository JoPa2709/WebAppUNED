document.addEventListener('DOMContentLoaded', function () {
   

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });

});

function mostrarElementos() {
    const elementos = document.querySelectorAll('[hidden]');
    elementos.forEach(elemento => {
        elemento.removeAttribute('hidden');
    });
}
