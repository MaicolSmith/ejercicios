console.log("-------- Ejercicio 2 --------")
//"Generar un código que determine si un numero es negativo, positivo o cero"
const numero = process.argv;
if (+numero[2] > 0){
    console.log("positivo");
}if(+numero[2] == 0){
    console.log("es cero");
}if (+numero[2] < 0){
    console.log("negativo");
}
else{
}
console.log(numero[2])