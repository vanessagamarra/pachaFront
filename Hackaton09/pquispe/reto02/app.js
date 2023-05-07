
// Llamamos los modulos fs, http, url:
let fs = require("fs");
let http = require("http");
let url = require('url');

// Creamos nuestro servidor:
let miServidor = http.createServer((solicitud, respuesta) => {
    respuesta.writeHead(200, {"Content-Type": "text/html"});
    
    let titulo;
    let descripcion;
    let answer;
    let html;

    const url = new URL(solicitud.url, `http://${solicitud.client.localAddress}:${solicitud.client.localPort}`);

    switch (url.pathname) {
        case "/":
            titulo = "Hackaton 09";
            descripcion = "LOGRO: Aprender a definir un algoritmo y aplicarlo en una solución a través de JavaScript, escribir código siguiendo una guía de estilo JS.";

            html = fs
                .readFileSync(__dirname + "/templates/inicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion);

            respuesta.end(html);
            break;


        case "/ejercicio/1":
            titulo = "Ejercicio 1";
            descripcion = "Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla:";
            answer = ejercicio01(parseInt(url.searchParams.get('num1Ejer1')), parseInt(url.searchParams.get('num2Ejer1')));

            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%answer%", answer);

            respuesta.end(html);
            break;


        default:
            respuesta.writeHead(404, {"Content-Type": "text/html"});
            respuesta.end("404 not found");
            break;
    };
});

// inicializar el servidor:
miServidor.listen(1111, "127.0.0.1");




// Algoritmos de los ejercicios:
function ejercicio01(numero1, numero2) {
    let suma = numero1 + numero2;
    return suma;
}