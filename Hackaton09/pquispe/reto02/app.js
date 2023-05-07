
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
            descripcion = "Aprender a definir un algoritmo y aplicarlo en una solución a través de JavaScript, escribir código siguiendo una guía de estilo JS.";

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
            answer = ejercicio01(parseFloat(url.searchParams.get('num1Ejer1')), parseFloat(url.searchParams.get('num2Ejer1')));

            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%answer%", answer);

            respuesta.end(html);
            break;

        
        case "/ejercicio/2":
            titulo = "Ejercicio 2";
            descripcion = "Un estudiante realiza 4 exámenes, calcular el promedio de estos:";
            answer = ejercicio02(parseFloat(url.searchParams.get('nota1Ejer2')), parseFloat(url.searchParams.get('nota2Ejer2')), parseFloat(url.searchParams.get('nota3Ejer2')), parseFloat(url.searchParams.get('nota4Ejer2')));

            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%answer%", answer);

            respuesta.end(html);
            break;


        case "/ejercicio/3":
            titulo = "Ejercicio 3";
            descripcion = "Calcular el área de un rectángulo:";
            answer = ejercicio03(parseFloat(url.searchParams.get('valor1Ejer3')), parseFloat(url.searchParams.get('valor2Ejer3')));
    
            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%answer%", answer);
    
            respuesta.end(html);
            break;


        case "/ejercicio/4":
            titulo = "Ejercicio 4";
            descripcion = "Calcular el área de un triángulo:";
            answer = ejercicio04(parseFloat(url.searchParams.get('valor1Ejer4')), parseFloat(url.searchParams.get('valor2Ejer4')));
    
            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%answer%", answer);
    
            respuesta.end(html);
            break;


        case "/ejercicio/5":
            titulo = "Ejercicio 5";
            descripcion = "Calcular el área de una circunferencia:";
            answer = ejercicio05(parseFloat(url.searchParams.get('radioEjer5')));
    
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
    return `La suma de los dos números es ${suma}`;
};

function ejercicio02(nota1, nota2, nota3, nota4) {
    let promedio = (nota1 + nota2 + nota3 + nota4) / 4;
    return `El promedio de las cuatro notas es ${promedio}`;
};

function ejercicio03(valor1, valor2) {
    let area = valor1 * valor2;
    return `El área del rectángulo es ${area}`;
};

function ejercicio04(valor1, valor2) {
    let area = (valor1 * valor2) / 2;
    return `El área del triángulo es ${area}`;
};

function ejercicio05(radio) {
    let area = Math.PI * (radio ** 2);
    return `El área de la circunferencia es ${area}`;
};
