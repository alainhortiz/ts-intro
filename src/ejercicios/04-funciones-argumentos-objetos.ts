
/*
    ===== Código de TypeScript =====
*/

//Declaración de una interface
interface PersonajeUniversal {
    nombre: string;
    pv: number;
    mostrarPv: () => void;
}

//Declaración de una función que no retorna nada
function curar(personaje: PersonajeUniversal, curarX: number): void {
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeUniversal = {
    nombre: 'Juan',
    pv: 100,
    mostrarPv(): void {
        console.log('Puntos de vida',this.pv);
    }
}

//Llamando a la función
curar(nuevoPersonaje, 100);

//Mostrar
nuevoPersonaje.mostrarPv();




