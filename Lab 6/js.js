
let password = document.getElementById("Contra");
let password2 = document.getElementById("Contra2")

document.getElementById("Contra").onkeyup= () => {
let pass = password.value; 

document.getElementById("Contra2").onkeyup= () => {
    let pass2 = password2.value;   



document.getElementById("Submit").onclick = () => {
    if(pass == pass2){

    alert("Correcto")
    document.write(`
    <!DOCTYPE html>
    <html>
    <style>
    div.a{
        position: absolute;
        top: 40 px;
        border: 3px solid blue;
      }  
    </style>
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <!-- Agregar la biblioteca de JavaScript de Bulma -->
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/js/bulma.min.js"></script>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Lab 6 part 1</title>
      </head>
      <body>
    
        <!-- Las columnas y el título como tal, son parte de la plantilla recabada de Bulma -->
    
      <section class="section">
      
        <div class="container">
            
            <div class="columns">
                <div class="column button is-info">Alan Patricio González Bernal</div>
                <div class="column button is-info">A01067546</div>
                <div class="column button is-primary">Laboratorio 6</div>
                <div class="column button is-info"><a href="mailto:A01067546@tec.mx">A01067546@tec.mx</a></div>
                <div class="column button is-info">443-318-9133</div>
                <div class="column button is-info"><a href="https://www.instagram.com/alanpagzz/"> Instagram </a></div>
              </div>
              <div>
              </div>
              <div class = " Content has-text-centered">
              <div class="a">
              Easter egg
              </div>
              <h1 class="title">
    
                Felicidades!!
            
              </h1>

              <button id="Colorchange" class="button is-primary">
              Clickea y ve lo que pasa!!
              </button>
              <br>
              <br>
              <h2>
              Preguntas:
              </h2>
              <br>

              <h2>
              <strong>
              ¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor?
              </strong>
              </h2>
              <br>
              <h3>
              Porque así le permite al usuario corregirlas en caso de cualquier error antes de enviar los datos al servidor.
              </h3>

              <br>
              <br>
              <h2>
              <strong>
              ¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?
              </strong>
              </h2>
              <br>
              <h3>
              Desactivando el JavaScript desde el navegador.
              </h3>

              <br>
              <h2>
              <strong>
              Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica?
              </strong>
              </h2>
              <br>
              <h3>
              Porque, a pesar de que se puede desactivar, lo mejor que se puede hacer tanto para seguridad del servidor como del usuario, es no desactivarlo.
              </h3>

              <div class="column">
              <button class="button is-primary is-small is-dark" data-tooltip="Contacta al admin Alan Patricio González Bernal">¿Necesitas ayuda?</button>
            </div>
            
        </div>
      </section>
    
      <script src="js1.js">
      </script>
      </body>
    </html>
    
    `);

   }
   else{

    alert("Incorrecto!")

   }
}

}


}
