// Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota
// promedio. El resultado que dará será perdio si la media es menor de 5, aprobado si está entre 5 y 7
// y Notable por encima de 7.
// Ejemplo para las notas 6, 8, 10 la media es 8 por tanto se califica como Notable
console.log("---ejercicio 7 ---");

let trimestre1 = 5;
let trimestre2 = 5;
let trimestre3 = 5;
let SumaTrimeste = trimestre1 + trimestre2 +  trimestre3;
let promedio  = SumaTrimeste / 3; 

if(promedio > 4 & promedio <= 6) {
    console.log("aprobo con dificultad ", promedio);
}if (promedio >= 7 ){
    console.log("Notable ", promedio);
} if (promedio < 5) {
    console.log("No aprobo ", promedio);
}


