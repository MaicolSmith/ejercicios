//Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al sexo y el nombre.
//El grupo A esta formado por las mujeres con un nombre anterior a la M y los hombres con un
//nombre posterior a la N y el grupo B por el resto. Escribir un programa que pregunte al usuario
//su nombre y sexo, y muestre por pantalla el grupo que le corresponde.

console.log("---ejercicio 9---");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('¿Cuál es tu nombre? ', (nombre) => {
    readline.question('¿Cuál es tu sexo (M/F)? ', (sexo) => {
      let grupo;
      if (sexo === 'F' && nombre < 'M') {
        grupo = 'A';
      } else if (sexo === 'M' && nombre > 'N') {
        grupo = 'A';
      } else {
        grupo = 'B';
      }
  
      console.log(`El grupo al que perteneces es ${grupo}`);
  
      readline.close();
    });
  });

