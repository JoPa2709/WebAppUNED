function formatCardNumber(input) {
    // Eliminar todos los caracteres que no sean dígitos
    let cardNumber = input.value.replace(/\D/g, '');

    if (cardNumber.length > 16) {
        cardNumber = cardNumber.substring(0, 16);
    }

    // Agrupar los dígitos en bloques de 4 separados por guiones
    cardNumber = cardNumber.match(/.{1,4}/g)?.join('-') || '';

    // Establecer el valor formateado en el input
    input.value = cardNumber;
}