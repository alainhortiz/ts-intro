
/*
    ===== Código de TypeScript =====
*/

//Declararación de un arreglo
const dbz: string[] = ['dbz1', 'dbz2', 'dbz3'];

//Desestructuración de un arreglo donde la posición es lo importante
const [dbz1, dbz2, dbz3] = dbz;

//Si quiero el 3er valor
const [,, dbz4] = dbz;


console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', dbz[2]);

console.log('Personaje 1: ', dbz1);
console.log('Personaje 2: ', dbz2);
console.log('Personaje 3: ', dbz3);