console.log("Hola mundo desde node");



// Método para que lea lineas de texto en la terminal, luego
// método para que lea la linea y la meta en un .txt

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingresa un texto: ', texto => {

    const filesystem = require('fs');
    filesystem.writeFileSync('Lab 8.txt', texto)
    readline.close()
});



const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 200, 340, 1000, 7000, 50];


// Función básica de promedio.

function promedio(arreglo){

  const suma = arreglo.reduce((a, b) => a + b, 0);
  const cantidad = arreglo.length;
  return suma / cantidad; 

};


console.log("El promedio es: ", promedio(arreglo));



//Problema que se ha solucionado en otros lenguajes

function suma(arreglo){

    const suma = arreglo.reduce((a, b) => a + b, 0);

    return suma

}

console.log("La suma del array es: ", suma(arreglo))