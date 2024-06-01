const botonDisminucion = document.querySelectorAll('.disminucion');
const botonIncremento = document.querySelectorAll('.incremento');
const cantidadIngresada = document.querySelectorAll('#cantidad');

botonDisminucion.forEach((boton, indice) => {
    boton.addEventListener('click', () => {
        const valorActual = parseInt(cantidadIngresada[indice].value, 10);
        const valorNuevo = valorActual - 1;
        if (valorNuevo >= 0) {
            cantidadIngresada[indice].value = valorNuevo.toString();
        }
    });
});

botonIncremento.forEach((boton, indice) => {
    boton.addEventListener('click', () => {
        const valorActual = parseInt(cantidadIngresada[indice].value, 10);
        const valorNuevo = valorActual + 1;
        if (valorNuevo <= 50) {
            cantidadIngresada[indice].value = valorNuevo.toString();
        }
    });
});