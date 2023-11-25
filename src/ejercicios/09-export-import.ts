
/*
    ===== Código de TypeScript =====
*/
///Importacion a traves de la desestructuración de argumentos de la interface Producto
import { Producto, calculaImpuestoSobreVenta } from "./08-desestructuracion-argumentos";


const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 150
    },
    {
        desc: 'Telefono 2',
        precio: 280
    },
];

const [total, isv] = calculaImpuestoSobreVenta( carritoCompras );

console.log('Total:',total);
console.log('ISV:',isv);


