
/*
    ===== Código de TypeScript =====
*/

interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}

//La función retorna un arreglo de dos numeros
function calculaImpuestoSobreVenta(productos: Producto[]): [number, number] {
    //Declarar una variable con un ambito dentro de la función
    let total = 0;

    //Recorrer los productos que viene en el argumento de la función
    //Desestructurar cada producto
    productos.forEach( ({ precio }) => {
        total += precio;
    })

    //Retornar el impuesto del 15 % del total de los productos
    return [total, total * 0.15];
}

const articulos = [telefono, tableta];

//Desestructuración del resultado de la función
const [ total, isv] = calculaImpuestoSobreVenta(articulos);

console.log('Total:',total);
console.log('ISV:',isv);


