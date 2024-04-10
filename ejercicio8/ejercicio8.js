//8. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos ingresos
//iguales o superiores a 1000 € mensuales. Escribir un programa que pregunte al usuario su edad
//y sus ingresos mensuales y muestre por pantalla si el usuario tiene que tributar o no.
console.log("-------- Ejercicio 8 --------");

const edad = parseInt(process.argv[2]);
const ingresosMensuales = parseFloat(process.argv[3]);


if (edad >= 36 && ingresosMensuales >= 1000) {
    console.log("Debes tributar.");
} else {
    console.log("No estás obligado a tributar.");
}
