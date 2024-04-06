//Generar un código que determine la diferencia ( resta ) entre dos números 
// de tal manera que la resta siempre se haga del numero mayor hacia el numero menor.
console.log ("-----ejercicio 3---");
let numero1=9;
let numero2=5;
let resta;

if (numero1 >= numero2) {
    resta = numero1 - numero2;
} else {
    resta = numero2 - numero1;
}
console.log(" la diferencia entre",numero1, "y",numero2, "es",resta);
