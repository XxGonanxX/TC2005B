console.log("Hola mundo desde node");

const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');


const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 200, 340, 1000, 7000, 50];

for (let item of arreglo) {

    setTimeout(() => {console.log(item);}, item);


}

console.log("Finalizado!!")

setTimeout(() => {console.log("Ahroa esto sale al final");}, 12000);


// Con COMMAND K Y COMMAND C SE COMENTA

//CON COMMAND K Y COMMAND U SE DESCOMENTA