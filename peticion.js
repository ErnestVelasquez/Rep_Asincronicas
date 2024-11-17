//Simulacion de la peticion del servidor
function obtenerDatos(){
    console.log("Obtencion de datos...");

    setTimeout(function() {
        const datos = [1,2,3,4,5];
        console.log("Datos recibidos:", datos);
    }, 2000);
}

obtenerDatos();