function mostrarElementos() {
    const elementos = document.querySelectorAll('[hidden]');
    elementos.forEach(elemento => {
        elemento.removeAttribute('hidden');
    });
}

// function submitForm() {
//     document.querySelector('.container-form').submit();
// }