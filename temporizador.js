//Iniciamos el contador 
let contador = 0 ;

const intervalo = setInterval(function() {
    console.log("Ejecutando tarea...");

    contador++;

    if (contador >= 5) {
        clearInterval(intervalo);
        console.log("El temporizador se ha detenido despues de 5 ejecuciones.");
    }
}, 1000);