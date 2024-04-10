//10. Escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el
//tipo impositivo que le corresponde.
//renta                   tipo impositivo
//menos de 10000$             5%
//entre 10000$ y 20000$       15%
//entre 20000$ y 35000$       20%
//entre 35000$ y 60000$       30%
//mas de 60000$               45%
console.log("-------- Ejercicio 10 --------")

const rentaAnual = parseFloat(process.argv[2]);


let tipoImpositivo;

if (rentaAnual < 10000) {
    tipoImpositivo = 5;
} else if (rentaAnual < 20000) {
    tipoImpositivo = 15;
} else if (rentaAnual < 35000) {
    tipoImpositivo = 20;
} else if (rentaAnual < 60000) {
    tipoImpositivo = 30;
} else {
    tipoImpositivo = 45;
}


console.log(`Tu renta anual es ${rentaAnual} euros. El tipo impositivo correspondiente es ${tipoImpositivo}%.`);

