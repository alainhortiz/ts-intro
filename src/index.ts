
/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
        ) {}
}

//Extender de la clase Persona Normal
class Heroe3 extends PersonaNormal {
    constructor(
        public alterEgo?: string,
        public edad?: number,
        public nombreReal?: string, 
        ) {
            super( nombreReal, 'New York, USA' );
        }
}
const mujerMaravilla2 = new Heroe3('Diana', 2000, 'Gal');
console.log(mujerMaravilla2);