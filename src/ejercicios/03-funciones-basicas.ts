
/*
    ===== Código de TypeScript =====
*/

//Declaración de una función
function sumar(a: number, b: number): number {
    return a + b;
}

//declaración de una función de flecha
const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

//Declaración de una función con un argumento opcional
function multiplicar (numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

const resultado: number = sumar(10, 20);

//el resultado es 20
const resultadoMultiplicar: number = multiplicar(10);

//Modifica el argumento opcional, el resultado es 500
const resultadoMultiplicar: number = multiplicar(10,0,50);

console.log(resultado);