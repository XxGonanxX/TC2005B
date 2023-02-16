// Con la palabra reservada VAR se pueden declarar variables, 
// al igual que con let. Let tiene mayor alcance

var comida = "chilaquiles";

let cena = "tacos";

const precio = 70;

// Las variables pueden redefinirse ne el buscador, no queremos que eso pase, por eso
// precio es una constante. Se usa con CONST

// El comando console.log("hola"); imprime ese valor en la consola una vez que se 
// corre el código. En este caso lo que se imprimiría es el Hola

console.log("hola");

console.info("Valor de la comida: " + comida);

// Con el console.info, nos sale una i en la terminal, i de información claramente.

// Con el console.warn() se da un warning, console.error marca el error

console.warn("No modifiques precios");
console.error("Te dije que no modificaras el precio.");

// Console.assert(); hace que el código siga corriendo mientras se cumpla la condición.

console.assert(1 === 1);

// El programa sigue corriendo

console.assert(1 === "1");

// El programa marca error, indica en donde y deja de correr.

// El doble igual signicia equivalencia en valor.
// EL triple igual significa equivalencia en valor y tipo.
// El primer igual significa asignación.