// En un tramo de un really los conductores no deben ir ni demasiado
//rapido ni demasiado lento. Este ejercicio debe tomar la longitud del tramo en
//kilometros y el tiempo empleado, si la velocidad está entre
//40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.
//Ejemplo. si recorre 100 km en 4 horas, ha ido a una velocidad de 100/4 que son 25km/h. Estaría descalificado.

console.log("----ejercicio 5-----");
let kilometros=220;
let tiempo=5;
let total = kilometros/tiempo ;

if (total > 40 & total < 60) {
 console.log(" aprueba con la velocidad " ,total);
} else {
 console.log(" descalificado ",total);
}
