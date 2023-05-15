var fs = require("fs");
// llamamos a la librería http
var http = require("http");
var url = require('url'); 


var titulo = "Hackaton 10";
var parrafo = "Respuestas de la hackaton 09";
var new_inputs = '<label for="dato_i">Datos _i</label><input id="dato_i" type="text" class="form-control">'

var miServidor = http.createServer((peticion, respuesta) => {
    respuesta.writeHead(200, { "Content-Type": "text/html" });
    switch (peticion.url) {
        case "/":
            var html = fs
                .readFileSync(__dirname + "/templates/inicio.html")
            respuesta.end(html);
            break;
        case "/ejercicio/1":
            titulo = "Ejercicio 01"
            parrafo = "1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla"
            generarEjercicio(respuesta, titulo, parrafo, new_inputs, 2);
            break;
        case "/ejercicio/2":
            titulo = "Ejercicio 02"
            parrafo = "2. Un estudiante realiza 4 exámenes, calcular el promedio de estos"
            generarEjercicio(respuesta, titulo, parrafo, new_inputs, 4);
            break;
        case "/ejercicio/3":
            titulo = "Ejercicio 03"
            parrafo = "3. Calcular el área de un rectángulo"
            generarEjercicio(respuesta, titulo, parrafo, new_inputs, 2);
            break;
        case "/ejercicio/4":
            titulo = "Ejercicio 04"
            parrafo = "4. Calcular el área de un triángulo"
            generarEjercicio(respuesta, titulo, parrafo, new_inputs, 2);
            break;
        case "/ejercicio/5":
            titulo = "Ejercicio 05"
            parrafo = "5. Calcular el área de una circunferencia"
            generarEjercicio(respuesta, titulo, parrafo, new_inputs, 1);
            break;
        default:
            respuesta.writeHead(404, { "Content-Type": "text/html" });
            respuesta.end("404 not found")
            break;
    }
});

// inicializar el servidor
miServidor.listen(1111, "127.0.0.1");

function repeatText(text, count) {
    let resultado = "";
    for (let i = 1; i <= count; i++) {
        resultado += text.replace(/_i/g, `${i}`);
    }
    return resultado;
}

function generarEjercicio(respuesta, titulo, parrafo, new_inputs, cant_inp) {
    new_inputs = repeatText(new_inputs, cant_inp)
    let html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
        .toString()
        .replace("%titulo%", titulo)
        .replace("%parrafo%", parrafo)
        .replace("%inputs%", new_inputs)
    respuesta.end(html)
}