
/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion,
    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
    alcalde: SuperHeroe
}

const superHeroe: SuperHeroe = {
    nombre: 'Superman',
    edad: 30,
    direccion: {
        calle: 'Calle 123',
        pais: 'México',
        ciudad: 'Ciudad de México',
        alcalde: {
            nombre: 'Gonzalo',
            edad: 20,
            direccion: {
                calle: 'Calle 123',
                pais: 'México',
                ciudad: 'Ciudad de México',
                alcalde: undefined
            },
            mostrarDireccion: function (): string {
                throw new Error("Function not implemented.");
            }
        }
    },
    mostrarDireccion(): string {
        return this.nombre + ', de ' + this.edad + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais + ' y el alcalde es ' + this.direccion.alcalde.nombre;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);





