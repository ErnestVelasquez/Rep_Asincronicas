// Funcion donde muestra la fecha y hora actual
function mostrarFechaYHora (){
    const ahora = new Date();
    console.log(ahora.toLocaleString());
}

//Llamamos la funcion de cada segundo
setInterval(mostrarFechaYHora, 1000);