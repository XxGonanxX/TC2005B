console.log("Hola mundo desde node");

const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');


const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 200, 340, 1000, 7000, 50];

for (let item of arreglo) {

    setTimeout(() => {console.log(item);}, item);


}

console.log("Finalizado!!")

setTimeout(() => {console.log("Ahora esto sale al final");}, 12000);

const http = require('http');

const server = http.createServer((request, response) => {

    console.log(request.url);

    if(request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Lab 10</h1>");
        response.write('<a href="/Pagina2">Avanzar a página 2 siuu</a>');
        response.end();
    } else if (request.url === "/Pagina2" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Página 2</h1>");
        response.write('<form action="/Pagina2" method="POST">');

        let radios = '<fieldset><legend>¿Qué color prefieres?</legend>';
        radios += '<div><input type="radio" id="rojo" name="color" value="rojo" checked>'
        radios += '<label for="rojo">Rojo</label></div>';
        radios += '<div><input type="radio" id="verde" name="color" value="verde">';
        radios += '<label for="verde">Verde</label></div></fieldset><br>';

        response.write(radios);

        response.write('<label for="Color_adicional">¿Prefieres algún otro color?</label>');
        response.write('<input type="text" id="Color_adicional" name="Color_Adicional"><br><br>');

        response.write('<input type="submit" value="Enviar">');

        response.write("</form>");
        response.write('</body></html>');
        response.end();
    } else if (request.url === "/Pagina2" && request.method === "POST") {

        const datos = [];

        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const color = datos_completos.split('&')[0].split('=')[1];
            console.log(color);
            if(color === "Rojo") {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("Gran color amigo!!");
                response.write('<img alt="color rojo" src="https://biblioteca.acropolis.org/wp-content/uploads/2014/12/rojo.png">');
                return response.end();
            } else {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("Otro gran color!!");
                response.write('<img alt="color verde" src="https://biblioteca.acropolis.org/wp-content/uploads/2014/12/verde.png">');
                return response.end();
            }
            
        });

        
    } else {
        response.statusCode = 404;
        response.write("Lo sentimos, no tenemos de ese color");
        response.end();
    }

  

});


server.listen(3000);


// Con COMMAND K Y COMMAND C SE COMENTA

//CON COMMAND K Y COMMAND U SE DESCOMENTA