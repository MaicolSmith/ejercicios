//""Este programa te ayuda a viajar. El programa pide al usuario si va a viajar con coche, tren,
//bicicleta o autobús. Si va en tren o autobús le recordará que lleve dinero para el billete.
//Ejemplo. el cliente pide ir en tren, aparecerá el mensaje "lleva dinero para el ticket""
console.log("-------- Ejercicio 4 --------")

// Mensaje de bienvenida al programa
console.log("¡Bienvenido al asistente de viajes!");

// Definición de la función principal para planificar el viaje
function planificarViaje() {
    // Pregunta al usuario cómo planea viajar y convierte la respuesta a minúsculas para hacerla menos sensible a mayúsculas
    var medioTransporte = process.argv[2]
    //prompt("¿Cómo planeas viajar? (coche, tren, bicicleta o autobús)").toLowerCase();

    // Evalúa la opción seleccionada por el usuario y proporciona recomendaciones
    switch (medioTransporte[2]) {
        case "coche":
            console.log("¡Que tengas un buen viaje en coche!");
            break;
        case "tren":
            console.log("Recuerda llevar dinero para el billete del tren.");
            break;
        case "bicicleta":
            console.log("¡Disfruta del viaje en bicicleta!");
            break;
        case "autobús":
            console.log("Recuerda llevar dinero para el billete del autobús.");
            break;
        default:
            console.log("Por favor, elige una opción válida (coche, tren, bicicleta o autobús).");
    }
}


planificarViaje();





