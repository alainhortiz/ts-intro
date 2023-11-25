
/*
    ===== Código de TypeScript =====
*/

//Declaración de una clase con el método tradicional
class Heroe {
    alterEgo: string;
    edad: number;
    nombreReal: string;

   //Se dejecuta cunado se instancia una clase y entre otras cosas nos permite inicializar propiedades de la clase
    constructor(alterEgo: string) {
       this.alterEgo = alterEgo;
    }
}

//Declaración de una clase con el método simplificado
class Heroe2 {
    //Aqui crea directamente la propiedad de la clase cuando se instancia e incluso puedo ponerlos opcionales para que 
    //esten obligados a pasarlos como argumnentos cuando se instancia una clase.
    constructor(
        public alterEgo?: string,
        public edad?: number,
        public nombreReal?: string, 
        ) {}
}

//Instanciar una clase
const ironman = new Heroe('Ironman');
const superman = new Heroe2();
const mujerMaravilla = new Heroe2('Diana', 2000, 'Gal');

console.log(ironman);
console.log(mujerMaravilla);