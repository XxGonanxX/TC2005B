let número = prompt("Por favor, ingresa un número");


let boton = document.getElementById("button")
boton.innerHTML = "cuadrado, cubo y número original."


const arreglo = [];

for (var i = 1; i <= número; i++) {

    arreglo.push(i);
    arreglo.push(i*i);
    arreglo.push(i*i*i);

}

let boton2 = document.getElementById("boton2");
boton2.innerHTML = "Test de velocidad en cálculos"

const total = []


function segundo() {

    //Cronómetro 

    let segundos = 0;
    let cronometro;


    function starttimer () {

        cronometro = SetInterval(actualizatimer, 1000);

    }

    function actualizatimer() {

        segundos++;

    }

//Para sacar el random int

let a = Math.floor(Math.random() * (20 - 1) + 1);
let b = Math.floor(Math.random() * (20 - 1) + 1);

alert("Cual es el resultado? " +a+ " + " +b+ "")
let respuesta = prompt();



if (respuesta === a + b) {


    total.push("Correcto!");
    total.push(segundos)



}

else{

    total.push("incorrecto!");
    total.push(segundos)

}

document.write(total)

}



boton2.onclick = () => document.write(segundo());



boton.onclick = () => document.write(arreglo);


//Tercera pregunta

function contador(array) {


    let negativos = 0;
    let ceros = 0;
    let positivos = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] < 0) {

            negativos ++;
        }

        else if (array[i] === 0) {

            ceros++;

        }

        else {

            positivos++;

        }

    }

    document.write("Se tienen " + negativos + " Números negatvos <br>")
    document.write("Se tienen " + ceros + " Números cero <br>")
    document.write("Se tienen " + positivos + " Números positivos  <br>")
}


const numbers = [-2, -1, 0, 1, 2, 3, 4, 5]
const result = contador(numbers);
boton3.onclick = () => document.write(contador(numbers));


// Cuarta pregunta

let matrix = [

    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]

]

document.write(matrix)

function promedios(matrix) {


    let promedios = [];

    for (let i = 0; i < matriz.length; i++) {

        let suma = 0;


    for (let j = 0; j < matriz[i].length; j++) {

        suma += matriz[i][j];

    }

    promedios.push(suma / matriz [i].length);

}

  document.write("Los resultados de la matriz son: " + promedios);

}

const result4 = promedios(matrix);
boton4.onclick = () => document.write(promedios(matrix));
document.write(result4)

// La pregunta 5

function Reversa(txt) {

    this.txt = txt;

    this.reversa = function(){

        return this.txt.split("").reversa().join("")

    };

    this.validar = function() {

        return this.txt.length > 0;

    }

}


document.write(Reversa(matrix))

// La 6

let Calculadora = {
    num1: 0,
    num2: 0,
    operacion: "",
  
    seleccionarOperacion: function() {
      this.operacion = document.getElementById("operacion").value;
    },
  
    calcular: function() {
      this.num1 = parseInt(document.getElementById("num1").value);
      this.num2 = parseInt(document.getElementById("num2").value);
  
      switch (this.operacion) {
        case "suma":
          resultado = this.num1 + this.num2;
          break;
        case "resta":
          resultado = this.num1 - this.num2;
          break;
        case "multiplicacion":
          resultado = this.num1 * this.num2;
          break;
        case "division":
          resultado = this.num1 / this.num2;
          break;
      }
  
      document.getElementById("resultado").innerHTML = resultado;
    }
  };




