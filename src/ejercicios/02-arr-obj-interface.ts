
/*
    ===== Código de TypeScript =====
*/

//Declaración de un arreglo
let habilidades: string[] = ['HTML', 'CSS', 'JavaScript'];

//Declaración de una interface
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string
}

//Declaración de una constante de tipo interface. No esta pueblo Natal porque se declaro opcional(?)
const personaje: Personaje = {
    nombre: 'Juan',
    hp: 100,
    habilidades: ['HTML', 'CSS', 'JavaScript']
}

//Asignar un valor a una propiedad
personaje.puebloNatal = 'Madrid';

//Imprimir un arreglo en consola
console.table(personaje);