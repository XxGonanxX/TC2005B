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

for (var i = 1; i <= 10; i++) {

}

console.log(i);

// Si cambio el var por Let, el console.log(i) ya no funcionaría
// ya que la variable solo existiría durante el for, con el var
// la variable si existe hasta después del for, por ende es 
// visible y modificable por el usuario.

// genera una alerta al usuario con el mensaje.

alert("hola");

// Prompt le permite al usuario escribir algo

let nombre = prompt("Como te llamas?");

console.log("hola " + nombre);

// Confirm  es como el prompt, pero de aceptar y cancelar

let is_hungry = confirm("Tienes hambre?")

console.log(is_hungry);

//function 

function numero_tacos(){

    return 5;

}

console.log(numero_tacos());

//Este código regresará 5, una función de toda la vida.

// funcion moderna

let cantidad_tacos = () => {return 5;}

console.log(cantidad_tacos());

//html dinamico con eventos

// Encuentra elemento de cualquier id.

let boton = document.getElementById("button")
boton.innerHTML = "Botón de prueba"
boton.onclick = () => alert("Felicidades, el botón funciona.")

// arreglos

const arreglo = ["Elemento"];


// se le pueden añadir cosas al arreglo

arreglo.push("Otro Elemento");

arreglo["dos"] = 2;

// Le estoy dando un tamaño al array.

arreglo.length = 10;

arreglo[20] = "Fin del arreglo";

console.log(arreglo);

// con IN regresa los elementos del arreglo, con of me da su localidad.

for (let elemento in arreglo) {


    console.log(elemento);

}

for (let elemento of arreglo) {


    console.log(elemento);

}

// Objetos

let objeto = {

    //Conjunto de atributos con valores
    atributo_1: "Valor 1",
    atributo_2: 2

}

console.log(objeto);


for (let elemento in objeto) {


    console.log(elemento);

}


console.log(objeto.atributo_1);
console.log(objeto.atributo_2);
objeto.atributo_3 = "tres";

for(let elemento in objeto){

    console.log(elemento);
}

const arreglo_de_objeto = [{atributo_1: "valor 0"}, {atributo_2: 1}, {}, objeto];
console.log(arreglo_de_objetos);