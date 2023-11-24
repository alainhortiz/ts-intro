
/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles

}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Yo canto',
    detalles: {
        autor: 'Laura Pausini',
        anio: 2015
    }
}

//Desestructuracion
const { volumen, segundo, cancion, detalles: {autor,anio} } = reproductor;
//Otra forma
//const { autor, anio } = detalles;

//Gracias a la desestructuración podemos acceder a los valores
console.log(volumen, segundo, cancion, autor);

//Metodo anterior
console.log(reproductor.volumen, reproductor.segundo, reproductor.cancion, reproductor.detalles.autor);





