
/*
    ===== Código de TypeScript =====
*/

//Declaración de una interface donde los hijos son opcionales
interface Pasajero {
    nombre: string;
    hijos?:string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos (pasajero: Pasajero): void {
    
    //Encadenamiento opcional evalua, si tiene hijos, cuentamelos si no, devuleve 0
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);
imprimeHijos(pasajero2);
