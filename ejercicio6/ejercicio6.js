//6. Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos
//iguales cuyo precio sea superior a 40 euros. Tu programa debe comprobar y calcular la cantidad a
//pagar sabiendo el número de artículos y el precio de cada uno.

//Ejemplo si compras 20 artículos de 10 dólares se te descuenta un 15% del total pagarías 20*10 - 20*10*0.15 =170 dólares.

console.log("-------- Ejercicio 6 --------");

const cantidad = parseInt(process.argv[2]);
const precio = parseInt(process.argv[3]);

const compra = cantidad * precio;

if (cantidad > 10 && precio > 40){
    const descuento = compra * 0.15;
    total = compra - descuento;
    console.log(`el descuento es ${descuento}`);
    console.log(`total a pagar ${total}`)
}else{
    console.log("no se aplica descuento");
    console.log(`total a pagar ${compra}}`)
}