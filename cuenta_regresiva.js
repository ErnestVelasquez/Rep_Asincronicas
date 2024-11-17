//Iniciamos el contador
let contador = 5;

// La funcion donde se ejecutara cada segundo
const intervalo = setInterval(function() {
    console.log(contador);

    contador--;
    
    if (contador < 0) {
        console.log("¡Tiempo terminado!");

        clearInterval(intervalo);
    }
}, 1000);
